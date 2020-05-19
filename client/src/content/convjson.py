import yaml, json, pathlib

def dump_to_yaml(filename):
    if filename.split('.')[1] != "yaml":
        return

    name = filename.split('.')[0]
    with open(filename, 'r', encoding='utf-8') as f:
        data = yaml.load(f, Loader=yaml.FullLoader)
        
        if data != None:
            f = open(name + '.json', 'w') 
            json.dump(data[:len(data)], f)
            print(filename, len(data))

for file in pathlib.Path(".").iterdir():
    dump_to_yaml(file.name)
