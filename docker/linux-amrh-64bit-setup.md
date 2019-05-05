# Setting up machines other than 32 bit (armhf, amd, 64 bit etc)

    apt-get install -y apt-transport-https ca-certificates wget software-properties-common -y
    wget https://download.docker.com/linux/debian/gpg 
    apt-key add gpg
    echo "deb [arch=armhf] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | tee -a /etc/apt/sources.list.d/docker.list
    apt-get update
    apt-cache policy docker-ce
    apt-get -y install docker-ce
    systemctl enable docker

If apt fails because of GPG error(or you are unable to import GPG), then use `aptitude`
