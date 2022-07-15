// Each section has a long list of question objects denoted by the first digit of the id number

const questions = [

 {
"id": 4.1,
"definition": "Basic command for viewing filenames and various metadata",
"answer": "ls",
},
{
"id": 4.2,
"definition": "ls switch to list items line by line",
"answer": "-1",
},
{
"id": 4.3,
"definition": "ls switch to display all file and subdirectory names, including hidden file names",
"answer": "-a, --all",
},
{
"id": 4.4,
"definition": "ls switch to show a directory's metadata instead of its contents",
"answer": "-d, --directory",
},
{
"id": 4.5,
"definition": "ls switch used to classify each files type with indicator code",
"answer": "-F, --classify",
},
{
"id": 4.6,
"definition": "ls switch used to display all file and subdirectory names along with associated index number",
"answer": "-i, --inode",
},
{
"id": 4.7,
"definition": "ls switch used to display file and much subdirectory metadata",
"answer": "-l",
},
{
"id": 4.8,
"definition": "ls switch used to show a directory's contents recursively",
"answer": "--R",
},
{
"id": 4.9,
"definition": "ls switch used to make the file sizes more human readable",
"answer": "-h",
},
{
"id": 4.10,
"definition": "command used to view all current aliases",
"answer": "alias",
},
{
"id": 4.11,
"definition": "common alias for ls -l",
"answer": "ll",
},
{
"id": 4.12,
"definition": "command that allows the user to create empty files on the fly",
"answer": "touch",
},
{
"id": 4.13,
"definition": "with file globbing,  which special character represents a single character",
"answer": "? question mark",
},
{
"id": 4.14,
"definition": "with file globbing,  which special character represents any number of characters ",
"answer": "*  asterisk",
},
{
"id": 4.15,
"definition": "with file globbing,  a range of characters can be selected with which special character(s)",
"answer": "[ ] brackets",
},
{
"id": 4.16,
"definition": "with file globbing, character selection can be negated with which special character(s)",
"answer": "^ caret",
},
{
"id": 4.17,
"definition": "Basic command for creating directories",
"answer": "mkdir",
},
{
"id": 4.18,
"definition": "mkdir switch to create parent directories in directory trees",
"answer": "-p, --parents",
},
{
"id": 4.19,
"definition": "mkdir switch to receive verification that the directory was succesfully constructed",
"answer": "-v",
},
{
"id": 4.20,
"definition": "Basic command utility to copy a file or directory",
"answer": "cp",
},
{
"id": 4.21,
"definition": "cp switch to perform a cursory copy and keep the files original attributes",
"answer": "-a, --archive",
},
{
"id": 4.22,
"definition": "cp switch to overwrite any preexisting destination files with the same name as the DEST",
"answer": "-f, --force",
},
{
"id": 4.23,
"definition": "cp switch to ask before overwriting any preexisting destination files with the same name as the DEST",
"answer": "-i, --interactive",
},
{
"id": 4.24,
"definition": "cp switch to not overwrite any preexisting destination files with teh same name as the DEST",
"answer": "-n, --no-clobber",
},
{
"id": 4.25,
"definition": "cp switch to copy a directory's contents recursively",
"answer": "-R, -r, --recursive",
},
{
"id": 4.26,
"definition": "cp switch to only overwrite preexisting destination files with the same name as DEST, if the source file is newer",
"answer": "-u, --update",
},
{
"id": 4.27,
"definition": "cp switch to provide detailed command action information as the command executes",
"answer": "-v, --verbose",
},
{
"id": 4.28,
"definition": "Basic command to move or rename a file or directory",
"answer": "mv",
},
{
"id": 4.29,
"definition": "mv switch that will not overwrite any preexisting destination files with the same name as DEST",
"answer": "-f, --force",
},
{
"id": 4.30,
"definition": "mv switch that will as before overwriting any preexisting destination files with the same name as DEST",
"answer": "-i, --interactive",
},
{
"id": 4.31,
"definition": "mv switch that will not overwrite any preexisting destination files with the same name as DEST",
"answer": "-n, --no-clobber",
},
{
"id": 4.32,
"definition": "mv switch that will overwrite preexisting destination files with the same name as DEST if the source file is newer",
"answer": "-u, --update",
},
{
"id": 4.33,
"definition": "mv switch to provide detailed command action information as the command executes",
"answer": "-v --verbose",
},
{
"id": 4.34,
"definition": "Basic command utility to remove files and directories",
"answer": "rm",
},
{
"id": 4.35,
"definition": "rm switch that will delete any empty directories",
"answer": "-d, --dir",
},
{
"id": 4.36,
"definition": "rm switch that will continue with deletion even if some items do not exist and will not ask prior to deleting items",
"answer": "-f, --force",
},
{
"id": 4.37,
"definition": "rm switch that will ask before deleting any existing files",
"answer": "-i, --interactive",
},
{
"id": 4.38,
"definition": "rm switch that will ask before deleting more than three files or when using the -r option",
"answer": "I",
},
{
"id": 4.39,
"definition": "rm switch that will delete a directory's contents recursively",
"answer": "-R, -r, --recursive",
},
{
"id": 4.40,
"definition": "rm switch that will provide detailed information as the command executes",
"answer": "-v, --verbose",
},
{
"id": 4.41,
"definition": "LIst 4 common Linux compression utilities",
"answer": "gzip, bzip2, xz, zip",
},
{
"id": 4.42,
"definition": "Command used to display bzip2 compressed files",
"answer": "bzcat",
},
{
"id": 4.43,
"definition": "Command used to display xz compressed files",
"answer": "xzcat",
},
{
"id": 4.44,
"definition": "Command used to display zcat compressed files",
"answer": "zcat ",
},
{
"id": 4.45,
"definition": ""copy in and out" utility",
"answer": "cpio",
},
{
"id": 4.46,
"definition": "cpio switch that designates the archive file to use",
"answer": "-I",
},
{
"id": 4.47,
"definition": "cpio switch that copies files from an archive or displays files within the archive - copy in mode",
"answer": "-i, --extract",
},
{
"id": 4.48,
"definition": "cpio switch that designates that only relative path names should be used",
"answer": "--no-absolute-filenames",
},
{
"id": 4.49,
"definition": "cpio switch that creates an archive by copying files into it - copy out mode",
"answer": "-o, --create",
},
{
"id": 4.50,
"definition": "cpio switch that displays a list of files within the archive, a table of contents",
"answer": "-t, --list",
},
{
"id": 4.51,
"definition": "cpio switch that displays each file's name as each file is processed",
"answer": "-v, --verbose",
},
{
"id": 4.52,
"definition": "Basic archive utility that stands for tape archiver and is popular for creating backups",
"answer": "tar",
},
{
"id": 4.53,
"definition": "Ridiculous name for a file that is both compressed and archived",
"answer": "tarball",
},
{
"id": 4.54,
"definition": "tar switch that creates the tar archive file",
"answer": "-c, --create",
},
{
"id": 4.55,
"definition": "tar switch that appends files to an existing tar archive file, but copies only those files that were modified since the original archive file was created",
"answer": "-u, --update",
},
{
"id": 4.56,
"definition": "tar switch that creates an incremental or full archive based on metadata stored in the provided file",
"answer": "-g, --listed-incremental",
},
{
"id": 4.57,
"definition": "tar switch that compresses tar archive file into a tarball using gzip",
"answer": "-z, --gzip",
},
{
"id": 4.58,
"definition": "tar switch that compresses tar archive file into a tarball using bzip2",
"answer": "-j --bzip2",
},
{
"id": 4.59,
"definition": "tar switch that compresses tar archive file into a tarball using xz",
"answer": "-J, --xz",
},
{
"id": 4.60,
"definition": "tar switch that displays each file's name as each file is processed",
"answer": "-v --verbose",
},
{
"id": 4.61,
"definition": "tar switch that designates the archive's filename",
"answer": "-f",
},
{
"id": 4.62,
"definition": "file extension that indicates a tarball snapshot file",
"answer": ".snar",
},
{
"id": 4.63,
"definition": "tar switch that compares tar file with external files and lists difference",
"answer": "-d, --compare, --diff",
},
{
"id": 4.64,
"definition": "tar switch that displays a tar archive file's contents",
"answer": "-t, --list",
},
{
"id": 4.65,
"definition": "tar switch that verifies each file as the file is processed. cannot be used with compression options",
"answer": "-W, --verify",
},
{
"id": 4.66,
"definition": "tar switch that extracts from an archive and places in pwd",
"answer": "-x, --extract, --get",
},
{
"id": 4.67,
"definition": "tar switch that decompresses files in a tarball using gunzip",
"answer": "-z, --gunzip",
},
{
"id": 4.68,
"definition": "tar switch that decompresses files in a tarball using bunzip2",
"answer": "-j, --bunzip2",
},
{
"id": 4.69,
"definition": "tar switch that decompresses files in a tarball using unxz",
"answer": "-J, --unxz",
},
{
"id": 4.70,
"definition": "Basic command used to copy files or entire disks or zero out entire disks",
"answer": "dd",
},
{
"id": 4.71,
"definition": "dd argument to set block size",
"answer": "bs=BYTES",
},
{
"id": 4.72,
"definition": "dd argument to set the number of input blocks to copy",
"answer": "count=N",
},
{
"id": 4.73,
"definition": "dd argument to set the level of information to display to STDERR",
"answer": "status=LEVEL",
},
{
"id": 4.74,
"definition": "dd status=LEVEL operand that displays only error messages",
"answer": "none",
},
{
"id": 4.75,
"definition": "dd status=LEVEL operand that does not display final transfer statistics",
"answer": "noxfer",
},
{
"id": 4.76,
"definition": "dd status=LEVEL operand that displays periodic transfer statistics",
"answer": "progress",
},
{
"id": 4.77,
"definition": "A file or directory that has one index (inode) number but at least two different filenames",
"answer": "hard link",
},
{
"id": 4.78,
"definition": "Basic command used to create a hard link",
"answer": "ln",
},
{
"id": 4.79,
"definition": "command used to remove a linked file",
"answer": "unlink",
},
{
"id": 4.80,
"definition": "A pointer to a file that may reside on another filesystem",
"answer": "soft link",
},
{
"id": 4.81,
"definition": "ln switch used to create a soft link",
"answer": "-s, --symbolic",
},
{
"id": 4.82,
"definition": "Basic command used to change a file's owner",
"answer": "chown",
},
{
"id": 4.83,
"definition": "Basic command used to change a file's group",
"answer": "chgrp",
},
{
"id": 4.84,
"definition": "chgrp switch used for recursion",
"answer": "-R ",
},
{
"id": 4.85,
"definition": "Basic command to print real and effective user and group IDs",
"answer": "id",
},
{
"id": 4.86,
"definition": "id switch to print only the effective group ID",
"answer": "-g",
},
{
"id": 4.87,
"definition": "id switch to print the name instead of a number",
"answer": "-n ",
},
{
"id": 4.88,
"definition": "Basic command to log into a new group",
"answer": "newgrp",
},
{
"id": 4.89,
"definition": "File type code for binary file",
"answer": "-",
},
{
"id": 4.90,
"definition": "File type code for directory",
"answer": "d",
},
{
"id": 4.91,
"definition": "File type code for symbolic link",
"answer": "l",
},
{
"id": 4.92,
"definition": "File type code for named or regular pipe",
"answer": "-P ",
},
{
"id": 4.93,
"definition": "File type code for socket file",
"answer": "s",
},
{
"id": 4.94,
"definition": "File type code for  block device",
"answer": "b",
},
{
"id": 4.95,
"definition": "Flie type code for character device",
"answer": "c",
},
{
"id": 4.96,
"definition": "Basic command used to change permissions of a file or directory",
"answer": "chmod",
},
{
"id": 4.97,
"definition": "Two modes that are used with chmod",
"answer": "Symbolic and Octal",
},
{
"id": 4.98,
"definition": "Basic command used to set the user mask",
"answer": "umask",
},
{
"id": 4.99,
"definition": "Octal value that represents the bits to be removed from the default octal mode 666 permissions for files or 777 for directories",
"answer": "user mask",
},
{
"id": 4.100,
"definition": "Bit that tells the Linux kernel to run the program with the permissions of the file owner and not the user account running the file",
"answer": "Set User ID (SUID)",
}
   
   ]
