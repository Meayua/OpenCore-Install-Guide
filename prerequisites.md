# Zaczynanie pracy z OpenCore.

Zanim możemy zacząć tworzyć system bazowany na OpenCore, musimy przejść przez kilka rzeczy.

## Wymagania

1. <span style="color:red">_**[Ważne]**_</span> Czas i cierpliwość.
   * Nie zaczynaj pracy nad tym jeśli masz terminy lub inną ważną pracę. Hackintoshe nie są czymś na czym powinieneś polegać jako maszyna do.
2. <span style="color:red">_**[Ważne]**_</span> **ZNAJ SWÓJ SPRZĘT**
   * Nazwa twojego Procesora (CPU) i jego generację
   * Twoje karty graficzne (GPU)
   * Twoje dyski (HDD/SSD, konfigurację NVMe/AHCI/RAID/IDE)
   * Model twojego laptopa lub komputera jeśli jest od OEM'a
   * Twój **chipset Ethernet**
   * Twój chipset WLAN/Bluetooth 
3. <span style="color:red">_**[Ważne]**_</span> **PODSTAWOWA ZNAJOMOŚĆ Z LINIĄ POLECEŃ I JAK UŻYWAĆ JEJ/TERMINALA**
   * To nie jest tylko [Ważne], to jest cała podstawa tego poradnika. Nie możemy ci pomóc jeśli nie wiesz jak zrobić `cd` do folderu czy usunąć pliku.
4. <span style="color:red">_**[Ważne]**_</span> Maszyna która jest kompatybilna jak widać w sekcji _**Kompatybliność**_
   * [Limitacje Sprzętowe](macos-limits.md)
5. <span style="color:red">_**[Ważne]**_</span> Minimum:
   * USB o pojemności 16GB jeśli będziesz używać MacOS'a do kreacji USB
   * USB o pojemności 4GB jeśli będziesz używać Windows\a lub Linux'a do kreacji USB
6. <span style="color:red">_**[Ważne]**_</span> **Połączenie Ethernet** (Bez USB dongli Wi-Fi, Adaptery USB Ethernet mogą działać w zależności od wsparcia MacOS'a) oraz musisz znać model swojej karty LAN
   * Musisz mieć albo fizyczny port Ethernet, albo kompatybilny z MacOS Ethernet adapter/dongla. Jeśli masz [kompatybilną kartę Wi-Fi](https://dortania.github.io/Wireless-Buyers-Guide/), możesz także użyć tego.
     * Pamiętaj że duża część kart Wi-Fi nie jest wspierana przez MacOS.
   * Dla osób ktore nie mogą użyć Ethernet'u lecz mają telefon z android'em, możesz podłączyć telefon to Wi-Fi, i do komputera używając USB, aby tether'ować połączenie używając [HoRNDIS](https://joshuawise.com/horndis#available_versions).
7. <span style="color:red">_**[Ważne]**_</span> **Funkcjonalna instalacja systemu:**
   * Może być:
     * MacOS (całkiem nowa wersja będzie lepsza)
     * Windows (Windows 10, 1703 lub nowsza)
     * Linux (Prawidłowo funkcjonujączy, z Python'em 2.7 lub starszym)
   * Dla użytkowników Windowsa i Linuxa, **15GB** wolnego miejsca na dysku na którym pracujesz. Na Windows'ie twój dysk systemowy (C:) musi mieć conajmniej **15GB** wolnego miejsca.
   * Dla użytkowników MacOS'a, **30GB** wolnego miejsca na dysku systemowym.
   * Więszkośc narzędzi będzie też potrzebowała [Python'a zainstalowanego](https://www.python.org/downloads/)
8. <span style="color:red">_**[Ważne]**_</span> **Najnowszy BIOS zainstalowany**
   * W większości przypadków, aktualizacja twojego BIOS'a da największą kompatybilość do MacOS'a
   * Wyjątkiem tego są płyty głowne AMD MSI 500-series, dowiesz się więcej na stronie o [Kompatybilności płyt głównych.](macos-limits.md#motherboard-support)
