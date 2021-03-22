class nam{
    constructor(){
        this.input=createInput("your dog name")
        this.greeting=createElement("h2")
    }

    display(){
        this.input.position(10,10)
        this.greeting.html("welcome"+this.input)
        this.greeting.position()
    }
}