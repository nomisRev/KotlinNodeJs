external fun require(module: String): dynamic

fun main(args: Array<String>) {
    println("================================================================")
    println("||                 Starting up Kotlin NodeJS                  ||")
    println("================================================================")

    val express = require("express")
    val app = express()

    app.get("/", { _, res ->
        res.type("text/plain")
        res.send("Hello world, from Kotlin JS")
    })

    app.get("/name/:nameParam", { req, res ->
        val name = req.params.nameParam
        res.type("text/plain")
        res.send("Hello $name, from Kotlin JS")
    })

    app.get("/name/:nameParam/from/:fromParam", { req, res ->
        val params = JavascriptDataClass.from(req = req)
        res.type("text/plain")
        res.send("Hello ${params.name}, from ${params.from}")
    })

    app.listen(8080, {
        println("Listening on port 8080")
    })

}


data class JavascriptDataClass(val name: String, val from: String) {
    companion object {
        @Suppress("UnsafeCastFromDynamic")
        fun from(req: dynamic) = JavascriptDataClass(req.params.nameParam, req.params.fromParam)
    }
}