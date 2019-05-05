# Setting up MAC machine for docker

    brew install docker docker-compose docker-machine xhyve docker-machine-driver-xhyve
    sudo chown root:wheel $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve
    sudo chmod u+s $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve

    # --xhyve-experimental-nfs-share – this flag allows you to share each file in your /Users/ folder between Mac OS and Linux run on Docker
    docker-machine create default --driver xhyve --xhyve-experimental-nfs-share

    eval $(docker-machine env default)

## If you get error "Docker machine "default" already exists", run the following commands

    docker-machine rm default
    docker-machine create default --driver xhyve --xhyve-experimental-nfs-share
    eval $(docker-machine env default)

## Start/stop/restart docker machines

    docker-machine start default
    docker-machine stop default
    docker-machine restart default
