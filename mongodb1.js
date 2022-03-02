> db.products.find()

> db.products.find({product_price:{$gt:500}}).pretty()

> db.products.find({id:"10"})

> db.products.find({$and:[{product_color:"indigo"},{product_price:"492"}]}).pretty()

> db.products.find({product_price:{'$gt':400,'$lt':800}}).pretty()

> db.products.find({product_material:"soft"}).pretty()

> db.products.deleteMany({ product_price:36})

> db.products.find({product_price:{$not:{'$gt':400,'$lt':600}}}).pretty()

> db.products.find({},{_id:0,product_name:1,product_material:1}).pretty()

> db.products.findOne({},{product_name:1,product_material:1})
