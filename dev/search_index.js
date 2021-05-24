var documenterSearchIndex = {"docs":
[{"location":"man/usage/#Usage","page":"Usage","title":"Usage","text":"","category":"section"},{"location":"man/usage/#Getting-started","page":"Usage","title":"Getting started","text":"","category":"section"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"The pager is called using the function pager. If the input object is not a AbstractString, then it will be rendered using show with MIME\"text/plain\". Thus, you can browse a large matrix, for example, using:","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> rand(100,100) |> pager","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"It is also possible to use the pager to browse the documentation of a specific function:","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> @doc(write) |> pager","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"All the functionalities can be seen in the built-in help system, accessible by typing ? inside the pager.","category":"page"},{"location":"man/usage/#Helpers","page":"Usage","title":"Helpers","text":"","category":"section"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"The following macros are available to help calling the pager.","category":"page"},{"location":"man/usage/#@help","page":"Usage","title":"@help","text":"","category":"section"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"This macro calls the help of any function and redirects it to the pager:","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> @help write","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"(Image: )","category":"page"},{"location":"man/usage/#@stdout_to_pager","page":"Usage","title":"@stdout_to_pager","text":"","category":"section"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"This macro redirects all the stdout to the pager after the command is completed:","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> @stdout_to_pager show(stdout, MIME\"text/plain\"(), rand(100,100))","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"(Image: )","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"This macro also works with blocks such as for loops:","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> @stdout_to_pager for i = 1:100\n       println(\"$(mod(i,9))\"^i)\n       end","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"(Image: )","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"note: Note\nThis macro can also be called using the shorter name @out2pr.","category":"page"},{"location":"#TerminalPager.jl","page":"Introduction","title":"TerminalPager.jl","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"CurrentModule = TerminalPager\nDocTestSetup = quote\n    using TerminalPager\nend","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"This package contains a pager written 100% in Julia. It can be used to scroll through content that does not fit in the screen. It was developed based on the Linux command less.","category":"page"},{"location":"#Installation","page":"Introduction","title":"Installation","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"julia> using Pkg\n\njulia> Pkg.add(\"TerminalPager\")","category":"page"},{"location":"#Manual-outline","page":"Introduction","title":"Manual outline","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"Pages = [\n    \"man/usage.md\"\n]\nDepth = 2","category":"page"}]
}
