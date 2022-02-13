#!/user/bin/env bash

# wget https://files.stork-search.net/releases/v1.4.0/stork-ubuntu-20-04
# chmod +x stork-ubuntu-20-04
wget https://files.stork-search.net/releases/v1.4.0/stork-amazon-linux
chmod +x stork-amazon-linux
./stork-ubuntu-20-04 build --input public/stork/stork.toml --output public/stork/xelement.st