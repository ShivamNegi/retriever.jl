module Retriever
using DataFrames

# package code goes here
function datasets()
    command = `retriever ls`
    run(command)
end

function install(dataset, connection; db_file=nothing,
                 conn_file="./Connection.conn", data_dir='.',
                 log_dir=nothing, debug=false, not_cached=true
                )
    if connection == "mysql" || connection == "postgres"
        if !isfile(conn_file)
            format = """
                        host my_server@myhost.com
                        port my_port_number
                        user my_user_name
                        password my_pass_word"""
            println("conn_file:  $conn_file does not exist.",
                    "To use a $connection server create a 'conn_file' with the format:",
                    "$format, \nwhere order of arguments does not matter")
            return
        end
    end
    df = readtable("$conn_file", separator = '\t',header=false)
end

function reset(scope='all')
    os = Sys.info()[['sysname']]
    home_dir = Sys.getenv('HOME')
    println("This will delete ", uppercase(scope), " cached infomation")

    println("Do you want to proceed? (y/n)")
    choice = chomp(readline())
    
    while choice != "y" || choice != 'n'
        println("Do you want to proceed? (y/n)")
        choice = chomp(readline())
    end
        
    if tolower(scope) == "all" && tolower(choice) == "y"
        if file.exists(file.path(home_dir, ".retriever"))
            unlink(file.path(home_dir, ".retriever"), recursive = TRUE)
        end
    else if tolower(scope) == "scripts" & tolower(choice.name) == "y"
        if (file.exists(file.path(home_dir, ".retriever", "scripts")))
            unlink(file.path(home_dir, ".retriever", "scripts"), recursive = TRUE)
        end
    else if (tolower(scope) == "data" & tolower(choice.name) == "y")
        if (file.exists(file.path(home_dir, ".retriever", "raw_data")))
            unlink(file.path(home_dir, ".retriever", "raw_data"), recursive = TRUE)
        end
    else if (tolower(scope) == "connections" &
            tolower(choice.name) == "y")
        if (file.exists(file.path(home_dir, ".retriever", "connections")))
            unlink(file.path(home_dir, ".retriever", "connections"), recursive = TRUE)
        end
    end  
end

function update()
    println("Please wait while retriever updates the scripts...")
    command = `retriever update`
    run(command)
end    

end # module
