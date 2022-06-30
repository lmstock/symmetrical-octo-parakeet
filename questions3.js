// Each section has a long list of question objects denoted by the first digit of the id number

const questions = [

   {
   "id": 3.1,
   "definition": "Three standard protocols used to communicate with system hardware",
   "word": "Peripheral Component Interconnect - PCI,  Universal Serial Bus - USB, General Purpose Input/Output - GPIO",
   },
   {
   "id": 3.2,
   "definition": "Linux advanced storage management technique that allows creation of virtual drive devices",
   "word": "Logical Volume Manager",
   },
   {
   "id": 3.3,
   "definition": "Virtual directory that the kernel dynamically populates to provide access to information about the system hardware settings and status",
   "word": "/proc directory",
   },
   {
   "id": 3.4,
   "definition": "Special disk partition that stores boot loader programs",
   "word": "EFI System Partition - ESP",
   },
   {
   "id": 3.5,
   "definition": "Linux advanced storage management technique that allows configuration of multiple paths between the linux system and network storage devices",
   "word": "Multipath",
   },
   {
   "id": 3.6,
   "definition": "File that lists the modules that the kernel will load at boot time. (Most hardware will be loaded dynamically so the file may not contain many modules)",
   "word": "/etc/modules",
   },
   {
   "id": 3.7,
   "definition": "File system utilized by ESP for storing boot loader programs",
   "word": "Microsoft File Allocation Table - FAT",
   },
   {
   "id": 3.8,
   "definition": "command that retreives information from /proc/interrupts, /proc/iports, and /proc/dma virtual files and combines them as one output",
   "word": "lsdev",
   },
   {
   "id": 3.9,
   "definition": "Linux advanced storage management technique combines multiple drives into one virtual drive and allows improved data access performance and reliability",
   "word": "Redundant Array of Inexpensive Disks - RAID",
   },
   {
   "id": 3.10,
   "definition": "File name for SATA and SCSI devices, where x is a letter representing the individual drive",
   "word": "/dev/sdx",
   },
   {
   "id": 3.11,
   "definition": "Function that maps physical block devices to virtual block devices",
   "word": "Device Mapper",
   },
   {
   "id": 3.12,
   "definition": "Utlility for displaying information about PCI buses in the system and devices connected to them",
   "word": "lspci",
   },
   {
   "id": 3.13,
   "definition": "Locations in memory where the CPU can send data to and receive data from the hardware device ",
   "word": "I/O Ports ",
   },
   {
   "id": 3.14,
   "definition": "A self contained section within a drive that the Operating System treates as a separate storage space",
   "word": "partition",
   },
   {
   "id": 3.15,
   "definition": "Type of device file in which data is transferred one character at a time, often used for serial devices such as terminals and USB",
   "word": "Character Device Files",
   },
   {
   "id": 3.16,
   "definition": "2 commands to remove modules by specifying the module name",
   "word": "rmmod, modprobe -r",
   },
   {
   "id": 3.17,
   "definition": "Simple program to insert a module into the Linux kernel",
   "word": "insmod",
   },
   {
   "id": 3.18,
   "definition": "Standard location for storing module object files",
   "word": "/lib/modules",
   },
   {
   "id": 3.19,
   "definition": "Interactive GUID partition table manipulator for GPT",
   "word": "gdisk",
   },
   {
   "id": 3.20,
   "definition": "lsblk switch option that displays information only about SCSI block devices on the system",
   "word": "-S",
   },
   {
   "id": 3.21,
   "definition": "File name for PATA devices, where x is a letter representing the individual drive",
   "word": "/dev/hdx",
   },
   {
   "id": 3.22,
   "definition": "Method used for managing disk partitions in systems that use BIOS boot loader method",
   "word": "Master Boot Record - MBR",
   },
   {
   "id": 3.23,
   "definition": "Special directory where the linux kernel creates device files that it will use to interface with hardware devices",
   "word": "/dev directory",
   },
   {
   "id": 3.24,
   "definition": "Allows for any size of boot loader program plus the ability to store multiple boot loader programs for multiple OS",
   "word": "Extensible Firmware Interface - EFI",
   },
   {
   "id": 3.25,
   "definition": "Utility which determines the module dependencies automatically and generates the modules.dep file",
   "word": "depmod ",
   },
   {
   "id": 3.26,
   "definition": "Common Command line partitioning tool used to create, view, delete, and modify partitions on any drive using MBR method of indexing partitions",
   "word": "fdisk",
   },
   {
   "id": 3.27,
   "definition": "File that lists module dependencies for each version",
   "word": "/lib/modules/version/modules.dep",
   },
   {
   "id": 3.28,
   "definition": "Command to add and remove modules from the Linux kernel",
   "word": "modprobe",
   },
   {
   "id": 3.29,
   "definition": "Command that provides information about a specified module",
   "word": "modinfo",
   },
   {
   "id": 3.30,
   "definition": "Signal that allows hardware devices to indicate when they have data to send to the CPU",
   "word": "Interrupt Request - IRQ",
   },
   {
   "id": 3.31,
   "definition": "Virtual directory created by the kernel in the sysfs filesystem format that provides additional information about hardware devices available to any user",
   "word": "/sys directory",
   },
   {
   "id": 3.32,
   "definition": "command that displays information about the block devices running on the system",
   "word": "lsblk",
   },
   {
   "id": 3.33,
   "definition": "Utility through which multiple partitions are configured into a RAID environment",
   "word": "mdadm",
   },
   {
   "id": 3.34,
   "definition": "Command that lists all the modules installed on your system as well as modules used by other modules",
   "word": "lsmod",
   },
   {
   "id": 3.35,
   "definition": "First sector on the first hard drive parition on the BIOS system",
   "word": "Master Boot Record - MBR",
   },
   {
   "id": 3.36,
   "definition": "Modern linux program that runs in the background and detects new hardware",
   "word": "udev",
   },
   {
   "id": 3.37,
   "definition": "Method used for managing disk partitions in systems that use UEFI boot loader method ",
   "word": "GUID Partition Table - GPT",
   },
   {
   "id": 3.38,
   "definition": "Feature of computer system that allows certain hardware subsytems to access main system memory independantly of CPU",
   "word": "Direct Memory Access - DMA",
   },
   {
   "id": 3.39,
   "definition": "Two ways to peresistently store data on computer systems",
   "word": "hard disk drive (HDD) & solid state drive (SSD)",
   },
   {
   "id": 3.40,
   "definition": "Type of device file in which data is transferred in large blocks of data, often used for high-speed data transfer devices such as hard drives and network cards",
   "word": "Block Device Files",
   },
   {
   "id": 3.41,
   "definition": "Three main types of drive connections",
   "word": "Parallel Advanced Technology Attachement (PATA), Serial Advanced Technology Attachement (SATA), Small Computer System Interface (SCSI)"
   },
   {
   "id": 3.42,
   "definition": "Partition manipulation program",
   "word": "parted",
   },
   {
   "id": 3.43,
   "definition": "Use output from this command to troubleshoot PCI card issues, such as when a card isnt recognized by the system",
   "word": "lspci",
   },
   {
   "id": 3.44,
   "definition": "Individual hardware files that can be linked into the kernel at runtime",
   "word": "kernel modules",
   },
   {
   "id": 3.45,
   "definition": "Command that displays information about the USB devices connected to to the linux system",
   "word": "lsusb",
   },
   {
   "id": 3.46,
   "definition": "Four categories based on unique attributes used by udev to create links to /dev storage device files",
   "word": "by-id, by-label, by-path, by-uuid",
   }
   
   ]