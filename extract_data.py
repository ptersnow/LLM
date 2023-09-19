import os

folder_path = "./"
train_split = "train_split.txt"
val_split = "val_split.txt"
vocab_file = "vocab.txt"

vocab = set()

file_path = os.path.join(folder_path, train_split)
with open(file_path, "rt", encoding = "utf-8") as infile:
    text = infile.read()
    characters = set(text)
    vocab.update(characters)

file_path = os.path.join(folder_path, val_split)
with open(file_path, "rt", encoding = "utf-8") as infile:
    text = infile.read()
    characters = set(text)
    vocab.update(characters)

with open(vocab_file, "w", encoding = "utf-8") as vfile:
    for char in sorted(list(vocab)):
        vfile.write(char + '\n')
