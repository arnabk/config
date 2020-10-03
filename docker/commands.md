# To build from image, "." is needed to specific context (current path). We can specify remote URL as context too

    docker build -f <fileName> . --label ubuntu
    # tag the image with "hello-world"
    docker build -t hello-world .

# run the image and map container port 80 to the host port 80

    docker run -it -p 80:80 hello-world

# Create container from image with name

    docker create container --name test1 b5ba323d97fe

# Docker file

    # Download the image
    FROM ubuntu:latest

    # copy src folder from local to the destination
    COPY /Users/WYK46451/Workspace /mnt

    # command that should be run
    CMD ["node", "something.js"]

    # Expose port 80. This is just for documentation purpose. While running the container, -p parameter must be used
    EXPOSE 80

    # run the command
    RUN apt update
    
    # Comma separated commands to run after start up
    ENTRYPOINT ["ls”]

# mount /localfolder to the container's folder

    docker run -p 80:80 -v /localfolder:/var/www/html hello-world

# Stop / remove all Docker containers

    docker stop $(docker ps -a -q)
    docker rm $(docker ps -a -q)

# Commit changes and creating a new image

    docker commit -m "commit message" <container-id> -a "Author name" <arnabkarmakar/my-image-name:latest> e.g, docker commit f5fd628644d6 ubuntu:latest

# For installing an image
    
    docker pull ubuntu/trusty

# -d means, run in background, -p dockerPort:hostPost
    
    docker run -d -p 6379:6379 my-name
    docker attach my-name
    docker run -d —name web1 -p 8081:80 tutom/hello-world

# Create container and remove after exiting

    docker run -it --rm bcoin
