import torch

from flask import Flask, request, jsonify

app = Flask(__name__)

chars = ""
with open("vocab.txt", 'r', encoding='utf-8') as f:
    text = f.read()
    chars = sorted(list(set(text)))

string_to_int = { ch:i for i,ch in enumerate(chars) }
int_to_string = { i:ch for i,ch in enumerate(chars) }
encode = lambda s: [string_to_int[c] for c in s]
decode = lambda l: ''.join([int_to_string[i] for i in l])

device = 'cpu'
modelLoaded = torch.load('modelCPU.pth')
modelLoaded.eval()


@app.route('/predict', methods=['POST'])
def predict():
    prompt = request.get_json()['prompt']
    context = torch.tensor(encode(prompt), dtype=torch.long, device=device)
    generated_chars = decode(modelLoaded.generate(context.unsqueeze(0), max_new_tokens=500)[0].tolist())
    print(f'Completion:\n{generated_chars}')
    return jsonify({'generated_chars': generated_chars})


if __name__ == '__main__':
    app.run()
