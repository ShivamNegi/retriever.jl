var documenterSearchIndex = {"docs": [

{
    "location": "intro.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "intro.html#Retriever-1",
    "page": "Home",
    "title": "Retriever",
    "category": "section",
    "text": "Julia wrapper for the Data Retriever software.Data Retriever automates the tasks of finding, downloading,  and cleaning up publicly available data, and then stores them in a local database or as .csv files.  Simply put, it's a package manager for data.  This allows data analysts to spend a majority of their time in analysing rather than in cleaning up or managing data."
},

{
    "location": "intro.html#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "To use Retriever, you first need to install Retriever, a core python package.To install Retriever using the Julia package manager\n    julia> Pkg.add(\"Retriever\")\nTo install from Source, download or checkout the source from the github page.Go to Retriever.jl/src. Run Julia.\n    julia> include(\"Retriever.jl\")\nTo create docs$julia --color=yes make.jl\nor simply\n$julia make.jl\n(Note: If you want help in installing Julia you can follow this tutorial"
},

{
    "location": "tutorial.html#",
    "page": "Installation Guide",
    "title": "Installation Guide",
    "category": "page",
    "text": ""
},

{
    "location": "tutorial.html#Data-Retriever-using-Julia-1",
    "page": "Installation Guide",
    "title": "Data Retriever using Julia",
    "category": "section",
    "text": "The wrapper module for Data Retriever has been implemented as Retriever. All the functions work and feel the same as the python Retriever module.  The module has been created using PyCall hence all the functions are analogous to the functions of Retriever python module."
},

{
    "location": "tutorial.html#Installation-1",
    "page": "Installation Guide",
    "title": "Installation",
    "category": "section",
    "text": "To use Retriever, you first need to install Retriever, a core python package.To install Retriever using the Julia package manager\n    julia> Pkg.add(\"Retriever\")\nTo install from Source, download or checkout the source from the github page.Go to Retriever.jl/src. Run Julia.\n    julia> include(\"Retriever.jl\")\n(Note: If you want help in installing Julia you can follow this tutorial"
},

{
    "location": "tutorial.html#Tutorial-1",
    "page": "Installation Guide",
    "title": "Tutorial",
    "category": "section",
    "text": "Get list of all the available datasets in Retriever.\n    \"\"\" Function Definition \"\"\"\n    function dataset_names()\n    \n    julia> Retriever.dataset_names()\nUpdating scripts to the latest version.\n    \"\"\" Function Definition \"\"\"\n    function check_for_updates()\n\n    julia> Retriever.check_for_updates()\nDelete information stored by Retriever which could be scripts, connections or data.\n    \"\"\" Function Definition \"\"\"\n    function reset_retriever(; scope::AbstractString=\"all\")\n\n    \"\"\" Using default variable all\"\"\"\n    julia> Retriever.reset_retriever()\n    \"\"\" Set scope as scripts \"\"\"\n    julia> Retriever.reset_retriever(scope=\"scripts\")\nTo download datasets the download function can be used.\n    \"\"\" Function Definition \"\"\"\n    function download(dataset; path::AbstractString=\"./\", quite::Bool=false,\n                subdir::Bool=false, use_cache::Bool=false, debug::Bool=false)\n\n    \n    julia> Retriever.download(\"iris\")\nInstalling scripts into engines.\n    \"\"\" Function Definition \"\"\"\n    function install_csv(dataset; table_name=nothing, compile::Bool=false,\n                debug::Bool=false, quite::Bool=false, use_cache::Bool=true)\n\n    function install_mysql(dataset; user::AbstractString=\"root\",\n                password::AbstractString=\"\", host::AbstractString=\"localhost\",\n                port::Int=3306, database_name=nothing, table_name=nothing,\n                compile::Bool=false, debug::Bool=false, quite::Bool=false,\n                use_cache::Bool=true)\n\n    function install_postgres(dataset; user::AbstractString=\"postgres\",\n                password::AbstractString=\"\", host::AbstractString=\"localhost\",\n                port::Int=5432, database::AbstractString=\"postgres\",\n                database_name=nothing, table_name=nothing, compile::Bool=false,\n                debug::Bool=false, quite::Bool=false, use_cache::Bool=true)\n\n    function install_sqlite(dataset; file=nothing, table_name=nothing,\n                compile::Bool=false, debug::Bool=false, quite::Bool=false,\n                use_cache::Bool=true)\n\n    function install_msaccess(dataset; file=nothing, table_name=nothing,\n                compile::Bool=false, debug::Bool=false, quite::Bool=false,\n                use_cache::Bool=true)\n\n    function install_json(dataset; table_name=nothing, compile::Bool=false,\n                debug::Bool=false, quite::Bool=false, use_cache::Bool=true)\n\n    function install_xml(dataset; table_name=nothing, compile::Bool=false,\n                debug::Bool=false, quite::Bool=false, use_cache::Bool=true)\n    \n    julia> Retriever.install_csv(\"iris\")\n    julia> Retriever.install_mysql(\"iris\")\n    julia> Retriever.install_postgres(\"iris\")\n    julia> Retriever.install_sqlite(\"iris\")\n    julia> Retriever.install_msaccess(\"iris\")\n    julia> Retriever.install_json(\"iris\")\n    julia> Retriever.install_xml(\"iris\")\n"
},

{
    "location": "index.html#",
    "page": "Source",
    "title": "Source",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Retriever-Documentation-1",
    "page": "Source",
    "title": "Retriever Documentation",
    "category": "section",
    "text": "Documentation for Retriever.jl's interface."
},

{
    "location": "index.html#Modules-1",
    "page": "Source",
    "title": "Modules",
    "category": "section",
    "text": "Pages = [\"lib/public.md\"]"
},

{
    "location": "lib/public.html#",
    "page": "Command Documentation",
    "title": "Command Documentation",
    "category": "page",
    "text": ""
},

{
    "location": "lib/public.html#Command-Documentation-1",
    "page": "Command Documentation",
    "title": "Command Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "lib/public.html#Retriever.check_for_updates-Tuple{}",
    "page": "Command Documentation",
    "title": "Retriever.check_for_updates",
    "category": "Method",
    "text": "    check_for_updates()\n\nCheck Retriever scripts for updates.\n\n\n\n"
},

{
    "location": "lib/public.html#Retriever.dataset_names-Tuple{}",
    "page": "Command Documentation",
    "title": "Retriever.dataset_names",
    "category": "Method",
    "text": "    dataset_names()\n\nReturn list of all available dataset names.\n\n\n\n"
},

{
    "location": "lib/public.html#Retriever.download-Tuple{Any}",
    "page": "Command Documentation",
    "title": "Retriever.download",
    "category": "Method",
    "text": "    download(dataset; path::AbstractString=\"./\", quite::Bool=false,\n            subdir::Bool=false, use_cache::Bool=false)\n\nDownload scripts for retriever.\n\n\n\n"
},

{
    "location": "lib/public.html#Retriever.install_csv-Tuple{Any}",
    "page": "Command Documentation",
    "title": "Retriever.install_csv",
    "category": "Method",
    "text": "    install_csv(dataset; table_name=nothing, compile::Bool=false,\n            debug::Bool=false, quite::Bool=false, use_cache::Bool=true)\n\nInstall Retriever scripts in csv format.\n\n\n\n"
},

{
    "location": "lib/public.html#Retriever.install_json-Tuple{Any}",
    "page": "Command Documentation",
    "title": "Retriever.install_json",
    "category": "Method",
    "text": "    install_json(dataset; table_name=nothing, compile::Bool=false,\n            debug::Bool=false, quite::Bool=false, use_cache::Bool=true)\n\nInstall Retriever scripts in json format.\n\n\n\n"
},

{
    "location": "lib/public.html#Retriever.install_msaccess-Tuple{Any}",
    "page": "Command Documentation",
    "title": "Retriever.install_msaccess",
    "category": "Method",
    "text": "    install_msaccess(dataset; file=nothing, table_name=nothing,\n                compile::Bool=false, debug::Bool=false, quite::Bool=false,\n                use_cache::Bool=true)\n\nInstall Retriever scripts in msacces.\n\n\n\n"
},

{
    "location": "lib/public.html#Retriever.install_mysql-Tuple{Any}",
    "page": "Command Documentation",
    "title": "Retriever.install_mysql",
    "category": "Method",
    "text": "    install_mysql(dataset; user::AbstractString=\"root\",\n                password::AbstractString=\"\", host::AbstractString=\"localhost\",\n                port::Int=3306, database_name=nothing, table_name=nothing,\n                compile::Bool=false, debug::Bool=false, quite::Bool=false,\n                use_cache::Bool=true)\n\nInstall Retriever scripts in mysql database.\n\n\n\n"
},

{
    "location": "lib/public.html#Retriever.install_postgres-Tuple{Any}",
    "page": "Command Documentation",
    "title": "Retriever.install_postgres",
    "category": "Method",
    "text": "    install_postgres(dataset; user::AbstractString=\"postgres\",\n                password::AbstractString=\"\", host::AbstractString=\"localhost\",\n                port::Int=5432, database::AbstractString=\"postgres\",\n                database_name=nothing, table_name=nothing, compile::Bool=false,\n                debug::Bool=false, quite::Bool=false, use_cache::Bool=true)\n\nInstall Retriever scripts in database.\n\n\n\n"
},

{
    "location": "lib/public.html#Retriever.install_sqlite-Tuple{Any}",
    "page": "Command Documentation",
    "title": "Retriever.install_sqlite",
    "category": "Method",
    "text": "    install_sqlite(dataset; file=nothing, table_name=nothing,\n                compile::Bool=false, debug::Bool=false, quite::Bool=false,\n                use_cache::Bool=true)\n\nInstall Retriever scripts in database.\n\n\n\n"
},

{
    "location": "lib/public.html#Retriever.install_xml-Tuple{Any}",
    "page": "Command Documentation",
    "title": "Retriever.install_xml",
    "category": "Method",
    "text": "    install_xml(dataset; table_name=nothing, compile::Bool=false,\n            debug::Bool=false, quite::Bool=false, use_cache::Bool=true)\n\nInstall Retriever scripts in xml format.\n\n\n\n"
},

{
    "location": "lib/public.html#Retriever.reset_retriever-Tuple{}",
    "page": "Command Documentation",
    "title": "Retriever.reset_retriever",
    "category": "Method",
    "text": "    reset_retriever(; scope::AbstractString=\"all\")\n\nRemove stored information on scripts, data, and connection\n\n\n\n"
},

{
    "location": "lib/public.html#Index-1",
    "page": "Command Documentation",
    "title": "Index",
    "category": "section",
    "text": "Pages = [\"public.md\"]Modules = [Retriever]"
},

]}
