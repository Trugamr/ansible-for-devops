## Encrypting secrets using Ansible Vault
Built in `ansible-vault` can be used to encrypt variables or inventory file.

### Encrypting a file
```zsh
ansible-vault encrypt file.yml
```

### Manually decrypting a file
When ansible playbook is being run it asks for password when it uses any `ansible-vault` encrypted file when `--ask-vault-pass` option is supplied.
File can manually be decypted like this
```zsh
ansible-vault encrypt file.yml
```

### Viewing/Editing an encrypted file
```zsh
# View an encrypted file
ansible-vault view file.yml
# Edit an encrypted file
ansible-vault edit file.yml
```