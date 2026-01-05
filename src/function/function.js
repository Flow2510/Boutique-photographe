import { supabase } from "../lib/supabase";

export async function uploadImage(file) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${crypto.randomUUID()}.${fileExt}`;

    const {error} = await supabase.storage
        .from('items-images')
        .upload(fileName, file);

        if (error) throw error;

        const { data } = supabase.storage
            .from('items-images')
            .getPublicUrl(fileName)

        return data.publicUrl;
}

export async function getItems(){
    const {data, error} = await supabase.from('items').select(`*, item_sizes(*)`);

    if (error) {
      console.error("Erreur récupération items:", error.message);
    } 
    return data;
  }

export async function deleteItem(itemId) {
    const { error: itemError } = await supabase
        .from('items')
        .delete()
        .eq('id', itemId);

    if (itemError) throw itemError;
    globalThis.alert("Item supprimés avec succès !");
}