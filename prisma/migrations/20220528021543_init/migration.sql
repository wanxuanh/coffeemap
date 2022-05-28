-- CreateTable
CREATE TABLE "cafes" (
    "id" SERIAL NOT NULL,
    "cafename" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255),
    "offday" VARCHAR(255),
    "neighbourhood" VARCHAR(255),
    "longtitude" VARCHAR(255),
    "latitude" VARCHAR(255),
    "imageurl" VARCHAR(255),

    CONSTRAINT "cafes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "comments" VARCHAR(255),
    "withPowerPlug" BOOLEAN NOT NULL DEFAULT true,
    "imageurl" VARCHAR(255),
    "USP" VARCHAR(255),
    "coffeeTexture" VARCHAR(255),
    "coffeeBody" VARCHAR(255),
    "coffeeAftertaste" VARCHAR(255),
    "drinkName" VARCHAR(255),
    "drinkPrice" VARCHAR(255),
    "originBlend" VARCHAR(255),
    "datetime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cafeid" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255),
    "password" VARCHAR(255),
    "name" VARCHAR(255),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cafes_cafename_key" ON "cafes"("cafename");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_cafeid_fkey" FOREIGN KEY ("cafeid") REFERENCES "cafes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
