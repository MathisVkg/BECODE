-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema cogip
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema cogip
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cogip` DEFAULT CHARACTER SET utf8 ;
USE `cogip` ;

-- -----------------------------------------------------
-- Table `cogip`.`companyType`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cogip`.`companyType` (
  `idcompanyType` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NULL,
  PRIMARY KEY (`idcompanyType`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cogip`.`company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cogip`.`company` (
  `idcompany` INT NOT NULL AUTO_INCREMENT,
  `nameCompany` VARCHAR(45) NULL,
  `country` VARCHAR(45) NULL,
  `VAT` INT NULL,
  `companyType_idcompanyType` INT NOT NULL,
  PRIMARY KEY (`idcompany`),
  INDEX `fk_company_companyType_idx` (`companyType_idcompanyType` ASC),
  CONSTRAINT `fk_company_companyType`
    FOREIGN KEY (`companyType_idcompanyType`)
    REFERENCES `cogip`.`companyType` (`idcompanyType`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cogip`.`people`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cogip`.`people` (
  `idpeople` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NULL,
  `lastName` VARCHAR(45) NULL,
  `email` VARCHAR(125) NULL,
  `company_idcompany` INT NOT NULL,
  PRIMARY KEY (`idpeople`),
  INDEX `fk_people_company1_idx` (`company_idcompany` ASC),
  CONSTRAINT `fk_people_company1`
    FOREIGN KEY (`company_idcompany`)
    REFERENCES `cogip`.`company` (`idcompany`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cogip`.`invoices`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cogip`.`invoices` (
  `idinvoices` INT NOT NULL AUTO_INCREMENT,
  `invoiceNumber` INT NULL,
  `invoiceDate` DATETIME NULL,
  `company_idcompany` INT NOT NULL,
  `people_idpeople` INT NOT NULL,
  PRIMARY KEY (`idinvoices`),
  INDEX `fk_invoices_company1_idx` (`company_idcompany` ASC),
  INDEX `fk_invoices_people1_idx` (`people_idpeople` ASC),
  CONSTRAINT `fk_invoices_company1`
    FOREIGN KEY (`company_idcompany`)
    REFERENCES `cogip`.`company` (`idcompany`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_invoices_people1`
    FOREIGN KEY (`people_idpeople`)
    REFERENCES `cogip`.`people` (`idpeople`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
