# LLM - MinC


## Requirements

The backend of this project was developed with Python3 (Flask and Pytorch), and the frontend was developed with Node.js (Next.js).

### Javascript

To get frontend runing, (https://nodejs.org/en/download/)[Node.js] is necessary. With it installed, install the requirements by doing:

```bash
cd web/
npm install
```

### Python

It is suggested to make use of `virtualenv`. Therefore, before installing the requirements run:

```bash
python3 -m venv venv
source venv/bin/activate
```
Then, install the requirements:

```bash
pip install -r requirements.txt
```

## Usage

First, clone the repository:

```bash
git clone https://github.com/ptersnow/LLM.git
cd LLM
```

For the tests used in (https://www.freecodecamp.org/news/how-to-build-a-large-language-model-from-scratch-using-python/)[freeCodeCamp], the vocab and the train and val splits can be downloaded from (https://drive.google.com/drive/folders/1RVAl1noMLkw1TJ9h2777VKLOxNNoGvcC?usp=drive_link)[here].
