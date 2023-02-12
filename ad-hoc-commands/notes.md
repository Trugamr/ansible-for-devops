### Running Ad-Hoc commands on multiple servers

We have created `Vagrantfile` that provisions 3 virtual machines, two for "app" and one for "db"

We have added these virtual machines to `invetory.yml` in different groups for app and db, then add "apps" and "dbs" to another group named "multi" which can then be used to assign common config like username, ssh key to be used and run ad-hoc commands like `ansible multi -a "df -h"`. We have added these.

Defaults for ansible can be added to `ansible.cfg` file in root directory of our project.
Option `host_key_checking` is set to `false`  as in case of mutliple machines it's not possible to accept first time ssh connect notice so we disable it all together.

Installing package using `package` module which is os agnostic or `apt` module, enabling the installed service and ensuring its started
```shell
ansible multi -b -m package -a "name=chrony state=present"
ansible multi -b -m service -a "name=chronyd state=started enabled=true"
```


