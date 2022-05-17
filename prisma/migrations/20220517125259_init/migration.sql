-- CreateTable
CREATE TABLE "cafes" (
    "cafeid" SERIAL NOT NULL,
    "cafename" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255),
    "offday" VARCHAR(255),
    "imageurl" VARCHAR(255),

    CONSTRAINT "cafes_pkey" PRIMARY KEY ("cafeid")
);

-- CreateTable
CREATE TABLE "reviews" (
    "reviewid" SERIAL NOT NULL,
    "comments" VARCHAR(255),
    "imageurl" VARCHAR(255),
    "cafeid" INTEGER,
    "userid" INTEGER,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("reviewid")
);

-- CreateTable
CREATE TABLE "users" (
    "userid" SERIAL NOT NULL,
    "username" VARCHAR(255),
    "password" VARCHAR(255),
    "name" VARCHAR(255),

    CONSTRAINT "users_pkey" PRIMARY KEY ("userid")
);

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_cafeid_fkey" FOREIGN KEY ("cafeid") REFERENCES "cafes"("cafeid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("userid") ON DELETE NO ACTION ON UPDATE NO ACTION;
