import os

def rename_files_in_directory(directory_path):
    # Verifica se il percorso della cartella è valido
    if not os.path.isdir(directory_path):
        print(f"Errore: Il percorso '{directory_path}' non è una cartella valida.")
        return

    # Ottieni la lista dei file nella cartella specificata
    file_list = os.listdir(directory_path)

    # Ordina la lista dei file
    file_list.sort()

    # Inizializza una variabile per tenere traccia dei numeri
    counter = 1

    # Itera attraverso i file
    for file_name in file_list:
        # Verifica se il file è un file regolare (non una directory)
        if os.path.isfile(os.path.join(directory_path, file_name)):
            # Estrai l'estensione del file
            file_extension = os.path.splitext(file_name)[1]

            # Genera il nuovo nome del file con il numero in sequenza
            new_file_name = f"{counter}{file_extension}"

            # Rinomina il file
            os.rename(os.path.join(directory_path, file_name), os.path.join(directory_path, new_file_name))

            # Incrementa il contatore
            counter += 1

    print("Rinomina completata.")

# Input del percorso della cartella come variabile
# directory_path = "DevTesters"
directory_path = "PO"

# Rinomina i file nella cartella specificata
rename_files_in_directory(directory_path)
