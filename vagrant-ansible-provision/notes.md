### Provisioning a vagrant box using Ansible playbook

We can create an ansible `playbook.yml` file that can be run using `vagrant provision` or the first time when `vagrant up` is used.

To run `playbook.yml` while provisioning a new vagrant box the `Vagrant` file can be updated to use following config

```Vagrantfile
config.vm.provision "ansible" do |ansible|
	ansible.playbook = "playbook.yml"
end
```
