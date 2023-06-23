import os
import shutil

def change_extension(folder_path, old_extension, new_extension):
    for filename in os.listdir(folder_path):
        if filename.endswith(old_extension):
            old_file_path = os.path.join(folder_path, filename)
            new_file_path = os.path.join(folder_path, os.path.splitext(filename)[0] + new_extension)
            shutil.move(old_file_path, new_file_path)
            print(f"Cambiata l'estensione del file {filename}.")

# Esempio di utilizzo
# folder_path = "DevTesters"
folder_path = "PO"
# old_extension = ".jpg"
old_extension = ".jfif"
# old_extension = ".jpeg"
new_extension = ".png"

change_extension(folder_path, old_extension, new_extension)
