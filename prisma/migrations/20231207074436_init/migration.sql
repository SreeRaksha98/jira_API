-- CreateTable
CREATE TABLE "Emp" (
    "emp_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "emp_email" TEXT NOT NULL,
    "emp_name" TEXT,
    "emp_pwd" TEXT
);

-- CreateTable
CREATE TABLE "Status" (
    "status_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "level" INTEGER NOT NULL,
    "priority" TEXT
);

-- CreateTable
CREATE TABLE "Client" (
    "client_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT
);

-- CreateTable
CREATE TABLE "Ticket" (
    "ticket_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "emp_id" INTEGER NOT NULL,
    "status_id" INTEGER NOT NULL,
    "client_id" INTEGER NOT NULL,
    CONSTRAINT "Ticket_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "Emp" ("emp_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ticket_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "Status" ("status_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ticket_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client" ("client_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Emp_emp_email_key" ON "Emp"("emp_email");
