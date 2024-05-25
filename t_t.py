from googletrans import Translator

def translate_text_file(input_file_path, output_file_path, src_language, dest_language):
    translator = Translator()
    try:
        
        with open(input_file_path, 'r', encoding='utf-8') as file:
            text = file.read()
        
       
        translated = translator.translate(text, src=src_language, dest=dest_language)
        
      
        with open(output_file_path, 'w', encoding='utf-8') as file:
            file.write(translated.text)
        
        print(f"Translation successful. Translated text written to {output_file_path}.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
  
    input_file_path = "transcription.txt" 
    output_file_path = "translated.txt"  
    source_language = "en" 
    destination_language = "bn"  

    translate_text_file(input_file_path, output_file_path, source_language, destination_language)
