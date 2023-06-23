from PIL import Image
import os

def resize_and_crop_images(input_dir, output_dir, target_size):
    # Crea la cartella di output se non esiste già
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Elabora tutte le immagini nella cartella di input
    for filename in os.listdir(input_dir):
        if filename.endswith(".jpg") or filename.endswith(".png"):
            # Apre l'immagine
            image_path = os.path.join(input_dir, filename)
            image = Image.open(image_path)

            # Ottiene le dimensioni originali dell'immagine
            original_width, original_height = image.size

            # Calcola il rapporto di aspetto dell'immagine originale
            aspect_ratio = original_width / float(original_height)

            # Calcola le dimensioni target considerando il rapporto di aspetto desiderato
            target_width, target_height = target_size
            target_aspect_ratio = target_width / float(target_height)

            if aspect_ratio > target_aspect_ratio:
                # L'immagine è più larga del target, quindi ridimensiona in base alla larghezza
                resized_width = target_width
                resized_height = int(target_width / aspect_ratio)
            else:
                # L'immagine è più alta o ha lo stesso rapporto di aspetto, quindi ridimensiona in base all'altezza
                resized_width = int(target_height * aspect_ratio)
                resized_height = target_height

            # Ridimensiona l'immagine
            resized_image = image.resize((resized_width, resized_height), Image.ANTIALIAS)

            # Esegue il ritaglio sull'immagine ridimensionata per mantenere il rapporto di aspetto desiderato
            left = (resized_width - target_width) / 2
            top = (resized_height - target_height) / 2
            right = (resized_width + target_width) / 2
            bottom = (resized_height + target_height) / 2
            cropped_image = resized_image.crop((left, top, right, bottom))

            # Salva l'immagine ridimensionata e ritagliata nella cartella di output
            output_path = os.path.join(output_dir, filename)
            cropped_image.save(output_path)

            print(f"Immagine {filename} ridimensionata e ritagliata con successo.")

# Esempio di utilizzo
# input_directory = "DevTesters"
# input_directory = "FinalBosses"
input_directory = "PO"
# output_directory = "DevTestersOut"
# output_directory = "FinalBossesOut"
output_directory = "POOut"
target_size = (100, 100)  # Dimensione in pixel desiderata (larghezza, altezza)

resize_and_crop_images(input_directory, output_directory, target_size)

