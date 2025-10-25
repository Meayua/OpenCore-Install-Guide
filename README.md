---
home: true
heroImage: /dortania-logo-clear.png
heroText: Poradnik Instalacji OpenCore Dortanii
actionText: Początek→
actionLink: prerequisites.md

meta:
- name: description
  content: Aktualnie wspierana wersja 1.0.5
---

# Czym jest OpenCore i dla kogo jest ten poradnik

OpenCore jest czymś co nazywamy "programem rozruchowym" (Z ang: boot loader) – Jest on zaawansowanym programem który pomaga nam przygotwać nasz komputer dla MacOS'a – dokładniej przez dokładanie nowych danych dla MacOS'a takich jak SMBIOS, tabele ACPI oraz kext'y. To narzędzie różni się od innych, takich jak Clover ponieważ zostało ono zaprojektowane z bezpieczeństwem i jakością na myśli, pozwalając nam na używanie dużej ilości funkcji zabezpeczajączych znajdujących się na prawdziwych Makach, takich jak [Ochrona integralności systemu](https://support.apple.com/pl-pl/102149) i [FileVault](https://support.apple.com/pl-pl/guide/mac-help/mh11785/mac). Dokładniejsze wyjaśnienie może być znalezione tutaj: [Dlaczego OpenCore zamiast Clover i innych](why-oc.md)

Ten poradnik skupia się na dwóch głównych rzeczach:

* Instalowanie macOS'a na komputerze bazowanym na archiketrurze X86
* Uczenie cie co sprawia że twój hack działa

Przez to, będzie od ciebie wymagana umiejętność czytania oraz uczenia się oraz używania Google'a. To nie jest łatwa automatyczna instalacja.

Pamiętaj że OpenCore jest dalej nowy i aktualnie w fazie beta. Mimo swej stabilności, która w porównaniu z Clover jest o wiele wyższa, dalej jest często aktualizowany, więc części konfiguracji się często zmieniają (np. nowe sposoby zastępujące stare.).

Osoby mające problemy mogą odwiedzić [subreddit r/Hackintosh](https://www.reddit.com/r/hackintosh/) oraz [Discord r/Hackintosh](https://discord.gg/u8V7N5C) aby uzyskać więcej pomocy. Lecz pamiętaj że to są miejsca angielskojęzyczne!