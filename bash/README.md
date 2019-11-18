
    eval "$(ssh-agent -s)"
    ssh-add -K ~/.ssh/id_rsa

- When you see error like this

    # ➜  ~ ssh root@localhost -p 2222
    # Unable to negotiate with 127.0.0.1 port 2222: no matching cipher found. Their offer: aes128-cbc,3des-cbc,aes256-cbc

use following command
    ssh -c aes256-cbc root@localhost -p 2222
