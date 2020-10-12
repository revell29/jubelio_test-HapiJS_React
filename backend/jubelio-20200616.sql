-- -------------------------------------------------------------
-- TablePlus 3.9.1(342)
--
-- https://tableplus.com/
--
-- Database: jubelio
-- Generation Time: 2020-10-12 10:24:25.2690
-- -------------------------------------------------------------


DROP TABLE IF EXISTS "public"."ms_product";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS ms_product_id_seq;

-- Table Definition
CREATE TABLE "public"."ms_product" (
    "id" int4 NOT NULL DEFAULT nextval('ms_product_id_seq'::regclass),
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "updatedAt" timestamp NOT NULL DEFAULT now(),
    "deletedAt" timestamp,
    "sku" varchar NOT NULL,
    "prodName" varchar NOT NULL,
    "image" varchar NOT NULL,
    "price" int4 NOT NULL,
    "stock" int4 NOT NULL,
    "descripttion" text,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."ms_product" ("id", "createdAt", "updatedAt", "deletedAt", "sku", "prodName", "image", "price", "stock", "descripttion") VALUES
('11', '2020-10-10 07:50:20.86079', '2020-10-12 02:01:50.517406', NULL, '28022696', 'Baju Magdalene', 'youtubecover.png', '130000', '100', NULL),
('12', '2020-10-10 07:50:20.86079', '2020-10-12 02:31:37.757492', NULL, '25919173', 'Samsung A50s', '5d724fd429760.jpg', '50000', '100', NULL),
('13', '2020-10-10 07:50:20.86079', '2020-10-10 07:50:20.86079', NULL, '28022257', 'Pakaian Kucing Dan Anjing HOOPET  Warna GREY', '', '150000', '0', NULL),
('14', '2020-10-10 07:50:20.86079', '2020-10-10 07:50:20.86079', NULL, '26026531', 'Tas selempang Biru Dongker', '', '30000', '0', NULL),
('15', '2020-10-10 07:50:20.86079', '2020-10-10 07:50:20.86079', NULL, '28022238', 'NOOSY TPU Soft Case for iPhone 6 Plus - Transparant', '', '100000', '0', NULL),
('16', '2020-10-10 07:50:20.86079', '2020-10-10 07:50:20.86079', NULL, '28022231', 'Charm Body Fit Extra Maxi Wing 20pads  Test Only', '', '79000', '0', NULL),
('17', '2020-10-10 07:50:20.86079', '2020-10-12 02:33:32.264887', NULL, '28022645', 'Baju Corak Carik Warna Warni', 'Instagram Post - 8.jpg', '100000', '100', NULL),
('18', '2020-10-10 07:50:20.86079', '2020-10-12 02:32:25.129973', NULL, '28022716', 'Baju Kaos Polos Aneka Size', 'Instagram Post - 7.jpg', '100000', '100', NULL),
('22', '2020-10-10 07:50:20.86079', '2020-10-10 07:50:20.86079', NULL, '28022653', 'kopi gayo', '', '10000000', '0', NULL);
