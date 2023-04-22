const { PrismaClient } = require('@prisma/client')
const fs = require('fs')

const prisma = new PrismaClient()

const jsonData = fs.readFileSync('C:/Users/manav/OneDrive/Desktop/My projects/Dawaidhundo/dawai-dhundo/public/data/products.json')
const data = JSON.parse(jsonData)

async function main() {

  for (const productSupplier of data.data.ProductSupplier) {
    await prisma.productSupplier.create({
      data: {
        id: productSupplier.id,
        price: productSupplier.price,
        stock: productSupplier.stock,
        distance: productSupplier.distance,
        
      }
    })
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
