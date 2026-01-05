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