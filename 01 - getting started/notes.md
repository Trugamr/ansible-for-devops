### Pinging machines

Here we are pinging a vagrant box
```shell
ansible -i hosts.ini playground -m ping --key-file ./box/.vagrant/machines/default/virtualbox/private_key
```

Checking free memory for running vagrant box
```shell
ansible -i hosts.ini playground -a "free -h" --key-file ./box/.vagrant/machines/default/virtualbox/private_key
```