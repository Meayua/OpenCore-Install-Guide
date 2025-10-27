# Tworzenie instalatora w Linuxie

Chociaż nie musisz używać świeżej instalacji macOS'a, aby używać OpenCore, część użytkowników preferuje mieć świeży start po aktualizacji menadżera rozruchu.

Aby zacząć będziesz potrzebować:

* Pendrive o pojemności conajmniej 4GB
* [macrecovery.py](https://github.com/acidanthera/OpenCorePkg/releases)
  
## Pobieranie MacOS'a

Żeby rozpocząc, przejdź do [folderu macrecovery](https://github.com/acidanthera/OpenCorePkg/releases) i użyj jednej z poniższych komend:

![](../images/installer-guide/legacy-mac-install-md/macrecovery.png)

```sh
# Dopasuj poniższą komendę do poprawnych folderów
cd ~/Downloads/OpenCore-0/Utilities/macrecovery/
```

Następnie, użyj jednej z poniższych komend, zależnie od jakiego systemu chciałbyś używać:

```sh
# Lion (10.7):
python3 ./macrecovery.py -b Mac-2E6FAB96566FE58C -m 00000000000F25Y00 download
python3 ./macrecovery.py -b Mac-C3EC7CD22292981F -m 00000000000F0HM00 download

# Mountain Lion (10.8):
python3 ./macrecovery.py -b Mac-7DF2A3B5E5D671ED -m 00000000000F65100 download

# Mavericks (10.9):
python3 ./macrecovery.py -b Mac-F60DEB81FF30ACF6 -m 00000000000FNN100 download

# Yosemite (10.10):
python3 ./macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000GDVW00 download

# El Capitan (10.11):
python3 ./macrecovery.py -b Mac-FFE5EF870D7BA81A -m 00000000000GQRX00 download

# Sierra (10.12):
python3 ./macrecovery.py -b Mac-77F17D7DA9285301 -m 00000000000J0DX00 download

# High Sierra (10.13)
python3 ./macrecovery.py -b Mac-7BA5B2D9E42DDD94 -m 00000000000J80300 download
python3 ./macrecovery.py -b Mac-BE088AF8C5EB4FA2 -m 00000000000J80300 download

# Mojave (10.14)
python3 ./macrecovery.py -b Mac-7BA5B2DFE22DDD8C -m 00000000000KXPG00 download

# Catalina (10.15)
python3 ./macrecovery.py -b Mac-CFF7D910A743CAAF -m 00000000000PHCD00 download
python3 ./macrecovery.py -b Mac-00BE6ED71E35EB86 -m 00000000000000000 download

# Big Sur (11)
python3 ./macrecovery.py -b Mac-2BD1B31983FE1663 -m 00000000000000000 download

# Monterey (12)
python3 ./macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000000000 download

# Ventura (13)
python3 ./macrecovery.py -b Mac-B4831CEBD52A0C4C -m 00000000000000000 download

# Sonoma (14)
python3 ./macrecovery.py -b Mac-827FAC58A8FDFA22 -m 00000000000000000 download

# Sequoia (15)
python3 ./macrecovery.py -b Mac-7BA5B2D9E42DDD94 -m 00000000000000000 download

# Latest (Tahoe, 26)
python3 ./macrecovery.py -b Mac-CFF7D910A743CAAF -m 00000000000000000 -os latest download
```

Po uruchomieniu i zakończeniu jednej z tych komend, otrzymasz wynik podobny do tego:

![](../images/installer-guide/legacy-mac-install-md/download-done.png)

* **Uwaga**: Zależnie od systemu, otrzymasz pliki BaseSystem lub RecoveryImage. Oba zachowują się w ten sam sposób, więc kiedy wspominamy pliki BaseSystem, to samo przekłada się na RecoveryImage.

* **Uwaga dla macOS 12 i powyżej**: Ponieważ najnowsze wersje macOS'a wprowadzają zmiany do stosu USB, zalecane jest zmapowanie portów USB (Używając USBToolBox) przed instalacją systemu macOS.
  * <span style="color:red"> CAUTION: </span> W wersjach macOS 11.3 i powyżej, [XhciPortLimit nie działa, co powoduje zapętlony rozruch](https://github.com/dortania/bugtracker/issues/162).
    * Jeśli już [twoje porty USB zostały zmapowane](https://dortania.github.io/OpenCore-Post-Install/usb/) i `XhciPortLimit` został wyłączony, będzie możliwe uruchomienie systemu macOS 11.3+ bez problemu.

## Tworzenie instalatora

Ta sekcja skupi się na utworzeniu odpowiednich partycji na twoim pendrive'ie. Możesz użyć swojego wybranego programu np. `gdisk` `fdisk` `parted` `gparted` lub `gnome-disks`. Ten poradnik skupi sie na `gdisk`, ponieważ jest wygodny i pozwala póżniej zmienić typ partycji, co jest dla nas niezbędne, aby macOS Recovery HD mogło się uruchomić. (dystrybucja użyta tutaj to Ubuntu 18.04, inne wersje oraz dystrybucje powinny także działać)

Podziękowania dla [midi1996](https://github.com/midi1996) za prace nad [Poradnikiem instalacji internetowej](https://midi1996.github.io/hackintosh-internet-install-gitbook/), na którym bazowany jest ten poradnik.

### Metoda 1

W terminalu:

1. wykonaj `lsblk` i określ blok twojego urządzenia USB
   ![lsblk](../images/installer-guide/linux-install-md/unknown-5.png)
2. wykonaj `sudo gdisk /dev/<blok twojego urządzenia USB>`
   1. jeśli pojawi się pytanie o tabele partycji, wybierz GPT.
      ![Wybierz GPT](../images/installer-guide/linux-install-md/unknown-6.png)
   2. naciśnij `p` aby pokazać bloki twojej partycji \(i zweryfikuj czy to jest ten potrzebny\)
      ![](../images/installer-guide/linux-install-md/unknown-13.png)
   3. naciśnij `o` aby wyczyścić tabele partycji i stwórz nową tabele GPT (jeśli nie jest pusta)
      1. potwierdż naciskając `y`
         ![](../images/installer-guide/linux-install-md/unknown-8.png)
   4. naciśnij `n`
      1. `numer partycji`: zostaw puste dla domyślnej
      2. `pierwszy sektor`: zostaw puste dla domyślnej
      3. `ostatni sektor`: zostaw puste dla całego dysku
      4. `Kod Hex lub GUID`: `0700` dla partycji typu Microsoft Basic Data
   5. naciśnij `w`
      * potwierdź przy użyciu `y`
      ![](../images/installer-guide/linux-install-md/unknown-9.png)
      * W niektórych przypadkach jest wymagane ponowne uruchomienie, rzadko, lecz jeśli chcesz sie upewnić, uruchom ponownie swój komputer. Możesz także spróbować odpiąć i wpiąć twoj pendrive.
   6. Zamknij `gdisk` poprzez naciśnięcie `q` (zwyczajnie zamyka się sam)
3. użyj `lsblk` aby ustalić identyfikatory twojej partycji
4. wykonaj `sudo mkfs.vfat -F 32 -n "OPENCORE" /dev/<blok twojej partycji>` aby sformatować twojego pendrive'a do FAT32 i nazwać go OPENCORE
5. następnie `cd` do `/OpenCore/Utilities/macrecovery/` gdzie powinny znajdować się pliki `.dmg` i `.chunklist`
   1. zamontuj partycje przy użyciu `udisksctl` (`udisksctl mount -b /dev/<blok twojej partycji>`, zwykle sudo nie jest wymagane) lub `mount` (`sudo mount /dev/<blok twojej partycji> /gdzie/chcesz/zamontowac`, sudo jest wymagane)
   2. `cd` do twojego pendrive'a i `mkdir com.apple.recovery.boot` na root twojej partycji FAT32
   3. teraz `cp` lub `rsync` pliki `BaseSystem.dmg` oraz `BaseSystem.chunklist` do folderu `com.apple.recovery.boot`

### Metoda 2 (jeśli 1 nie zadziała)

W terminalu:

1. wykonaj `lsblk` i określ blok twojego urządzenia USB
   ![](../images/installer-guide/linux-install-md/unknown-11.png)
2. wykonaj `sudo gdisk /dev/<blok twojego urządzenia USB>`
   1. jeśli pojawi się pytanie o tabele partycji, wybierz GPT.
      ![Wybierz GPT](../images/installer-guide/linux-install-md/unknown-12.png)
   2. naciśnij `p` aby pokazać bloki twojej partycji \(i zweryfikuj czy to jest ten potrzebny\)
      ![](../images/installer-guide/linux-install-md/unknown-13.png)
   3. naciśnij `o` aby wyczyścić tabele partycji i stwórz nową tabele GPT (jeśli nie jest pusta)
      1. potwierdż naciskając `y`
         ![](../images/installer-guide/linux-install-md/unknown-14.png)
   4. naciśnij `n`
      1. `numer partycji`: zostaw puste dla domyślnej
      2. `pierwszy sektor`: zostaw puste dla domyślnej
      3. `ostatni sektor`: `+200M`
      4. `Kod Hex lub GUID`: `0700` dla partycji typu Microsoft Basic Data
      ![](../images/installer-guide/linux-install-md/unknown-15.png)
   5. naciśnij `n`
      1. `numer partycji`: zostaw puste dla domyślnej
      2. `pierwszy sektor`: zostaw puste dla domyślnej
      3. `ostatni sektor`: zostaw puste dla całego dysku
      4. `Kod Hex lub GUID`: `af00` dla partycji typu Apple HFS/HFS+
      ![](../images/installer-guide/linux-install-md/unknown-16.png)
   6. naciśnij `w`
      * potwierdź przy użyciu `y`
      ![](../images/installer-guide/linux-install-md/unknown-17.png)
      * W niektórych przypadkach jest wymagane ponowne uruchomienie, rzadko, lecz jeśli chcesz sie upewnić, uruchom ponownie swój komputer. Możesz także spróbować odpiąć i wpiąć twoj pendrive.
   7. Zamknij `gdisk` poprzez naciśnięcie `q` (zwyczajnie zamyka się sam)
3. użyj `lsblk` aby ustalić identyfikatory twoich partycji
   ![](../images/installer-guide/linux-install-md/unknown-18.png)
4. wykonaj `sudo mkfs.vfat -F 32 -n "OPENCORE" /dev/<blok partycji 200MB>` aby sformatować twoją partycje do FAT32 i nazwać ją OPENCORE
5. następnie `cd` do `/OpenCore/Utilities/macrecovery/` gdzie powinny znajdować się pliki `.dmg` i `.chunklist`
   1. zamontuj partycje przy użyciu `udisksctl` (`udisksctl mount -b /dev/<blok partycji 200MB>`, zwykle sudo nie jest wymagane) lub `mount` (`sudo mount /dev/<blok partycji 200MB> /gdzie/chcesz/zamontowac`, sudo jest wymagane)
   2. `cd` do twojego pendrive'a i `mkdir com.apple.recovery.boot` na root twojej partycji FAT32
   3. pobierz `dmg2img` (dostępne na większości dystrybucji)
   4. wykonaj `dmg2img -l BaseSystem.dmg` i ustal która partycja ma właściwość `disk image`
      ![](../images/installer-guide/linux-install-md/unknown-20.png)
   5. wykonaj `sudo dmg2img -p <numer partycji> BaseSystem.dmg /dev/<twoja większa partycja>` aby zapisać obraz recovery na danej partycji
      * Ten proces zajmuje dużo czasu. STRASZNIE DUŻO jeśli używasz powolnego pendrive'a.
      ![](../images/installer-guide/linux-install-md/unknown-21.png)

## Po wykonaniu tego wszystkiego, zmierz do [Ustawianie EFI](./opencore-efi.md) aby skończyć swoją prace
