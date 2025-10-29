# Dodawanie Plików bazowych OpenCore

Aby ustawić strukturę folderu OpenCore, będziesz potrzebować folderu EFI z [Wydań OpenCore](https://github.com/acidanthera/OpenCorePkg/releases/). Pamiętaj że one będą w folderach IA32 lub X64, to pierwsze dla 32-bitowych maszyn, a to drugie, dla 64-bitowych Maszyn:

![](../images/installer-guide/opencore-efi-md/ia32-x64.png)

Wersje DEBUG i RELEASE:

* **DEBUG**: Może ogromnie pomóc w debuggowaniu problemów z rozruchem, lecz może dodać widoczne opóźnienie(ok. 3-5 seconds aby dostać się to picker'a). Po zainstalowaniu, możesz łatwo przebazować się na RELEASE
* **RELEASE**: Dużo szybsze czasy rozruchu, lecz OpenCore daje praktycznie brak przydatnych informacji do debugowania, utrudniając rozwiązywanie problemów z rozruchem.

Gdy pobrano, wstaw folder EFI(z OpenCorePkg) na root twojej partycji EFI:

![](../images/installer-guide/opencore-efi-md/efi-moved.png)

**Uwaga**:

* **Windows:** Wstaw folder EFI na root USB który stworzyłeś wszceśniej
* **Linux:** To jest partycja `OPENCORE` którą stworzyliśmy wcześniej
  * Pamiętaj że metoda 1 tworzy jedną partycję, a metoda 2, dwie partycje

Teraz otwórzmy nasz folder EFI i zobaczmy co jest w środku:

![base EFI folder](../images/installer-guide/opencore-efi-md/base-efi.png)

Teraz możesz zauważyć ze przychodzi on z dużą ilością plików w folderach `Drivers` i `Tools`, nie chcemy więksości ich:

* **Zachowaj następujące z folderu Drivers**(jeśli aplikowalne):

| Plik | Status | Opis |
| :--- | :--- | :--- |
| OpenUsbKbDxe.efi | <span style="color:#30BCD5"> Opcjonalny </span> | Wymagany dla systemów bez UEFI(przed 2012) |
| OpenPartitionDxe.efi | ^^ | Wymagany do rozruchu odzyskiwania macOS 10.7-10.9 |
| ResetNvramEntry.efi | ^^ | Wymagany do czyszczenia NVRAM'u systemu |
| OpenRuntime.efi | <span style="color:red"> Wymagany </span> | Wymagany dla poprawnej operacji |

::: details Więcej informacji na temat podanych plików

* AudioDxe.efi
  * Nie ma nic wspólnego z wsparciem dzwiękowym w MacOS'ie
* CrScreenshotDxe.efi
  * Używane do robienia zrzutów ekranu na systemach UEFI. Nie potrzebne dla nas
* HiiDatabase.efi
  * Używane do naprawy interfejsów takich jak OpenShell.efi na procesorach Sandy Bridge i starszych
  * Nie potrzebny do rozruchu
* NvmExpressDxe.efi
  * Używane na procesorach Haswell i starzych gdy nie ma wbudowanego sterownika NVMe w systemie.
  * Nie dotykaj, chyba że wiesz co robisz
* OpenCanopy.efi
  * To jest opcjonalny interfejs OpenCore, przejdziemy przez ustawianie go [Po Instalacji](https://dortania.github.io/OpenCore-Post-Install/cosmetic/gui.html) więc jak narazie go usuń
* OpenHfsPlus.efi
  * Sterownik publiczny HFS Plus, całkiem wolny, więc nie polecamy go używać chyba że wiesz co robisz
* OpenPartitionDxe.efi
  * Używany do rozruchu ozyskiwania OS X 10.7 przez 10.9
    * Notatka: Użytkownicy OpenDuet(tzw. bez UEFI) będą mieli ten sterownik wbudowany, więc go nie potrzebują
* OpenUsbKbDxe.efi
  * Używany dla Picker'a OpenCore na **starych systemach używających DuetPkg**, [nie polecane, a nawet szkodliwe na Procesorach Ivy Bridge i nowszych](https://applelife.ru/threads/opencore-obsuzhdenie-i-ustanovka.2944066/page-176#post-856653)
* Ps2KeyboardDxe.efi + Ps2MouseDxe.efi
  * Całkiem oczywiste gdy go będziesz potrzebować, użytkownicy mysz i klawiatur USB go nie potrzebują
  * Pamiętaj: PS2 ≠ USB
* ResetNvramEntry.efi
  * Pozwala na resetowanie NVRAM'u w Pickerze
* UsbMouseDxe.efi
  * Podobny pomysł do OpenUsbKbDxe, powinien być tylko używany na starych systemach używających DuetPkg
* XhciDxe.efi
  * Używany tylko na systemach z Procesorami Sandy Bridge i starzymi gdy nie ma wbudowanego sterownika XHCI w systemie
  * Tylko potrzebny gdy używasz karty rozszerzeniowej USB 3.0 w starszej maszynie

:::

* **Zachowaj następujące z foleru Tools:**

| Narzędzie | Status | Opis |
| :--- | :--- | :--- |
| OpenShell.efi | <span style="color:#30BCD5"> Opcjonalne </span> | Zalecany dla łatwiejszego debugowania |

Wyczyszczony folder EFI:

![Clean EFI](../images/installer-guide/opencore-efi-md/clean-efi.png)

Teraz możesz wstawić **swoje** wymanage sterowniki systemowe(.efi) do folderu _Drivers_ i Kexty/ACPI do swoich folderów. Zobacz [Zbieranie plików](../ktext.md) po więcej informacji na temat jaich plików powinieneś używać.

* Pamiętaj że sterowniki UEFI z Clover nie są wspierane przez OpenCore!(EmuVariableUEFI, AptioMemoryFix, OsxAptioFixDrv, etc). Zobacz [Konwersja sterowników systemowych Clover](https://github.com/dortania/OpenCore-Install-Guide/blob/master/clover-conversion/clover-efi.md) po więcej informacji o wspieranych sterownikach i tych które mogą być wstawione do OpenCore.

Tak **_może_** wyglądać wypełniony folder EFI (twój będzie inny):

![Populated EFI folder](../images/installer-guide/opencore-efi-md/populated-efi.png)

**Reminder**:

* Pliki SDDT i DSDT(`.aml`) idą do folderu ACPI
* Kexty(`.kext`) idą do folderu Kexts
* Sterowniki systemowe(`.efi`) idą do folderu Drivers

# Z tym z głowy, prejdz do [Zbierania plików](../ktext.md) aby znaleść wygamane kexty i sterowniki
