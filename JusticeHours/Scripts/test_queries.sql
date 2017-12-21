-- See all databases
SELECT *
FROM SYS.DATABASES

-- Get a list of available tables
SELECT *
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_TYPE='BASE TABLE'

-- Get the columns for a table
SELECT *
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME='spt_values'

-- Select all columns from JusticeHours
USE JusticeHours
SELECT *
FROM dbo.[hours]