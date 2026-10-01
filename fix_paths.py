import os
import re

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.js') or file.endswith('.jsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            content = re.sub(r'image:\s*\"/', 'image: "./', content)
            content = re.sub(r'src=\"/', 'src="./', content)
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
