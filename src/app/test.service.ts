import { Injectable } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  public testS: Subject<any> = new Subject();

  public employeeName: Subject<any> = new Subject();
 
  public test(): Observable<any> {
   return  this.testS.asObservable();
  }

  public getEmployeeName(): Observable<any> {
    return this.employeeName.asObservable();
  }

  public setEmployeeName(employeeName: string): any {
    this.employeeName.next(employeeName);
  }
  
  public getAwsEnablers() {
    let json = [{ "id": 1,
    "awsEnabler": "Enterprise API Gateway (Apigee)"
  },
  { "id": 2,
    "awsEnabler": "EDL (Hydration & Vending)"
 },
 { "id": 3,
    "awsEnabler": "B2B Gateway (for cloud resources)"
  },
  { "id": 4,
    "awsEnabler": "Service Mesh (App Mesh)"
 },
 { "id": 5,
    "awsEnabler": "IaaC (Terraform,CloudFormation)"
  },
  { "id": 6,
    "awsEnabler": "Containers"
 },
 { "id": 7,
    "awsEnabler": "Global DB (Aurora)"
  },
  { "id": 8,
    "awsEnabler": "Workflow (Airflow)"
 },
  { "id": 9,
    "awsEnabler": "Cloud Reporting (AWS QuickSight, Tableau)"
 },
 { "id": 10,
    "awsEnabler": "Auto ML (DataRobot, H20)"
  },
  { "id": 11,
    "awsEnabler": "GraphQL for APIs"
 },
  { "id": 12,
    "awsEnabler": "Data Streaming (Kinesis, Kafka, ESB)"
 },
 { "id": 13,
    "awsEnabler": "Text Extraction and OCR (AWS Textract)"
  },
  { "id": 14,
    "awsEnabler": "MailHub"
 },
  { "id": 15,
    "awsEnabler": "GraphDB (Neptune & Neo4j)"
 },
 { "id": 16,
    "awsEnabler": "Windows EC2"
  },
  { "id": 17,
    "awsEnabler": "SQL Server EC2"
 },
  { "id": 18,
    "awsEnabler": "MQ"
 },
 { "id": 19,
    "awsEnabler": "Web Sockets"
  },
  { "id": 20,
    "awsEnabler": "IDMZ"
 }];
 
 return json;
  }

  public getFilteredData() {
    let json = [
    ];
    return json;
  }


  public getMatCardData() {
    let json  = [{"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Strategy Management"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Environmental, Social & Governance Investing"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Marketing & Brand Management"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Communications Management"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Regulations & Directives Integration"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Product Management"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Project Portfolio Management"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Project Portfolio Management 2"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Project Portfolio Management 3"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Project Portfolio Management 4"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Relationships","cpbltyL2Nme":"Customer Management"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Relationships","cpbltyL2Nme":"Partner Management"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Relationships","cpbltyL2Nme":"Regulator Engagement"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Relationships","cpbltyL2Nme":"Human Capital Management"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Culture","cpbltyL2Nme":"Customer Centric Experiences"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Culture","cpbltyL2Nme":"Innovation Incubation"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Culture","cpbltyL2Nme":"Continuous Improvement"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Loans & Properties","cpbltyL2Nme":"Deal Underwriting"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Loans & Properties","cpbltyL2Nme":"Loan Origination Support"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Loans & Properties","cpbltyL2Nme":"Loan Quality Management"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Loans & Properties","cpbltyL2Nme":"Loan Activity Processing"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Loans & Properties","cpbltyL2Nme":"Custodial Services"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Loans & Properties","cpbltyL2Nme":"Loss Mitigation Management"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Loans & Properties","cpbltyL2Nme":"Occupancy Management"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Loans & Properties","cpbltyL2Nme":"Equity Investment Management"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Securities & Other Instruments","cpbltyL2Nme":"Formation"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Securities & Other Instruments","cpbltyL2Nme":"Issuance"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Securities & Other Instruments","cpbltyL2Nme":"Bond Administration"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Securities & Other Instruments","cpbltyL2Nme":"Disclosure Management"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Securities & Other Instruments","cpbltyL2Nme":"5"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Shared","cpbltyL2Nme":"Delivery Settlement"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Shared","cpbltyL2Nme":"Pipeline Management"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Shared","cpbltyL2Nme":"Pricing"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Shared","cpbltyL2Nme":"Trading/Execution"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Shared","cpbltyL2Nme":"Trading/Execution 5sdsd"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Financial","cpbltyL2Nme":"Cash Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Financial","cpbltyL2Nme":"Capital Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Financial","cpbltyL2Nme":"Tax Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Financial","cpbltyL2Nme":"BalanceSheet Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Financial","cpbltyL2Nme":"Finance Management & Reporting"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Financial","cpbltyL2Nme":"Payables & Receivables"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Financial","cpbltyL2Nme":"Payables & 6 Receivables"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Risk","cpbltyL2Nme":"Audit Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Risk","cpbltyL2Nme":"Governance & Complaince"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Risk","cpbltyL2Nme":"Incident Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Risk","cpbltyL2Nme":"Insurance Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Risk","cpbltyL2Nme":"Risk Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Corporate Services","cpbltyL2Nme":"Program Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Corporate Services","cpbltyL2Nme":"Facilities Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Corporate Services","cpbltyL2Nme":"Technology Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Corporate Services","cpbltyL2Nme":"Procurement Services"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Corporate Services","cpbltyL2Nme":"Legal Services"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Corporate Services","cpbltyL2Nme":"Investigations Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Corporate Services","cpbltyL2Nme":"Data & Information Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Corporate Services","cpbltyL2Nme":"Agreement/Contract Management"}]   ;
    return json;

    };

    public getMatCardDef() {
      let json = [
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Corporate Services",
            "segmentdef": "Corporate Services - A grouping of capabilities that support the business internally across Fannie Mae.",
            "capability": "Data & Information Management",
            "capabilitydef": "Data & Information Management - The ability to define, organize, structure, and disseminate data and information in order to conduct business in a way that is accessible to authorized users and technology assets; including data management, knowledge management, document and content management, records management, and data / information privacy (protection of NPI, etc.)."
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Corporate Services",
            "segmentdef": "Corporate Services - A grouping of capabilities that support the business internally across Fannie Mae.",
            "capability": "Technology Management",
            "capabilitydef": "Technology Management - The ability to manage the lifecycle of technology hardware, middleware and software, including cloud, COTS, ASP, etc. This does not include the software development lifecycle used to support business applications but rather the underlying hardware, software and middleware infrastructure and operations."
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Corporate Services",
            "segmentdef": "Corporate Services - A grouping of capabilities that support the business internally across Fannie Mae.",
            "capability": "Procurement Services",
            "capabilitydef": "Procurement Services - The ability to perform sourcing activities, negotiation and strategic selection of goods and services, including managing requisitions, purchase orders, and similar support functions; excluding the selection and performance management of suppliers and vendors which is covered under ‘Partner Management’ capability."
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Corporate Services",
            "segmentdef": "Corporate Services - A grouping of capabilities that support the business internally across Fannie Mae.",
            "capability": "Agreement / Contract Management",
            "capabilitydef": "Agreement / Contract Management - The ability for Fannie Mae to establish and maintain the terms and conditions of legal agreements with customers or partners and monitor compliance, including those that describe the terms and conditions of doing business with Fannie Mae and conducting transactional agreements."
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Corporate Services",
            "segmentdef": "Corporate Services - A grouping of capabilities that support the business internally across Fannie Mae.",
            "capability": "Facilities Management",
            "capabilitydef": "Facilities Management - The ability to provide services with respect to facility planning and management of facilities infrastructure and food services in order to foster productive work environment. This includes management of corporate real estate and facilities operations. This does not include building security etc. which is covered under Physical & Cyber Security. "
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Corporate Services",
            "segmentdef": "Corporate Services - A grouping of capabilities that support the business internally across Fannie Mae.",
            "capability": "Program Management",
            "capabilitydef": "Program Management - The ability to support programs and projects by ensuring successful planning, dependency management, cost expenditure, resource allocation and execution of project plans"
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Loans & Properties",
            "segmentdef": "Loans & Properties - A grouping of capabilities that provide business and operational certainty to customers throughout the business lifecycle.",
            "capability": "Loan Asset Management",
            "capabilitydef": "Loan Asset Management - The ability to monitor the operations, repairs, financial statements and inspections of properties backing loans funded by Multifamily Mortgage Business."
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Loans & Properties",
            "segmentdef": "Loans & Properties - A grouping of capabilities that provide business and operational certainty to customers throughout the business lifecycle.",
            "capability": "Deal Underwriting",
            "capabilitydef": "Deal Underwriting - The ability for Multifamily to receive information related to a potential transaction (loan, equity investment, security, etc.) in order to determine if  Fannie Mae will enter into the transaction.  Evaluation criteria can include the Seller/Servicing Guide, Lender’s Underwriting Analysis, Waiver Analysis, Credit Review/Underwriting, etc."
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Loans & Properties",
            "segmentdef": "Loans & Properties - A grouping of capabilities that provide business and operational certainty to customers throughout the business lifecycle.",
            "capability": "Loan Origination Support",
            "capabilitydef": "Loan Origination Support - The ability to provide the tools to the primary market in order to codify Fannie Mae's underwriting policies and guidelines and provide underwriting certainty. This includes Eligibility Criteria Management, Borrower Credit Services, and Case File Management, which include assessment of borrower financial data, the uniform loan application dataset (URLA/ULAD), uniform appraisal dataset (UAD), uniform closing disclosure (UCD), and other required source documents needed to determine borrower, property, and loan eligibility and to provide rep & warrant relief."
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Loans & Properties",
            "segmentdef": "Loans & Properties - A grouping of capabilities that provide business and operational certainty to customers throughout the business lifecycle.",
            "capability": "Loss Mitigation Management",
            "capabilitydef": "Loss Mitigation Management - The ability for Fannie Mae to provide tools to servicers that codify Fannie Mae's loss mitigation policies and guidelines, provide loss mitigation certainty, and approve seller / servicer loss sharing amounts based on the loss sharing contract, including P&I loss and eligible default expenses."
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Loans & Properties",
            "segmentdef": "Loans & Properties - A grouping of capabilities that provide business and operational certainty to customers throughout the business lifecycle.",
            "capability": "Occupancy Management",
            "capabilitydef": "Occupancy Management - The ability for Fannie Mae to manage all activities pertaining to occupancy management including offering relocation assistance, rental, conducting evictions and alternate disposition activities such as occupied auctions and former owner repurchase for the purpose of property disposition"
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Loans & Properties",
            "segmentdef": "Loans & Properties - A grouping of capabilities that provide business and operational certainty to customers throughout the business lifecycle.",
            "capability": "Property Acquisition",
            "capabilitydef": "Property Acquisition - The ability for Single Family to handle all activities required to acquire properties; including property redemption and confirmation period management, title clearance, and securing property for the purpose of onboarding property for disposition."
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Loans & Properties",
            "segmentdef": "Loans & Properties - A grouping of capabilities that provide business and operational certainty to customers throughout the business lifecycle.",
            "capability": "Equity Investment Management",
            "capabilitydef": "Equity Investment Management - The ability for Multifamily to support the creation and management of investment funds for the purpose of supporting affordable housing via tax credit (LIHTC) or direct equity investment into Multifamily properties."
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Loans & Properties",
            "segmentdef": "Loans & Properties - A grouping of capabilities that provide business and operational certainty to customers throughout the business lifecycle.",
            "capability": "Custodial Services",
            "capabilitydef": "Custodial Services - The ability to manage loan documentation (both electronic and paper) including storage, confirmation that the loan information is complete and legal, and verification of the accuracy of mortgage loan data against the loan documentation in order to satisfy established regulations, policies and guidelines. This includes document custody, custodial release or transfer and document certification."
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Loans & Properties",
            "segmentdef": "Loans & Properties - A grouping of capabilities that provide business and operational certainty to customers throughout the business lifecycle.",
            "capability": "Loan Activity Processing",
            "capabilitydef": "Loan Activity Processing - The ability for Fannie Mae to receive and reconcile reported loan events from servicers in order to ensure activity is valid and recorded properly. This includes loan onboarding (setting up a loan for master servicing based on servicing agreement), loan payment, loan adjustment, loan workout, loan liquidation, and servicing transfer."
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Loans & Properties",
            "segmentdef": "Loans & Properties - A grouping of capabilities that provide business and operational certainty to customers throughout the business lifecycle.",
            "capability": "Loan Quality Management",
            "capabilitydef": "Loan Quality Management - The ability to ensure compliance with Fannie Mae's policies and requirements by performing automated and/or manual quality control processes, supporting resolution in order to identify quality issues or defects across the loan lifecycle. This includes loan quality review / resolution, loan data corrections, and loan legal/regulatory compliance, which ensures that loans meet charter requirements, fair lending standards, mortgage fraud and other legal and regulatory requirements. "
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Loans & Properties",
            "segmentdef": "Loans & Properties - A grouping of capabilities that provide business and operational certainty to customers throughout the business lifecycle.",
            "capability": "Property Sale",
            "capabilitydef": "Property Sale - The ability to list and manage the pre-sale contract negotiations of property via the appropriate sales channel, including retail and alternative dispositions for purpose of compliance with charter mandate and off board property."
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Loans & Properties",
            "segmentdef": "Loans & Properties - A grouping of capabilities that provide business and operational certainty to customers throughout the business lifecycle.",
            "capability": "Property Preservation",
            "capabilitydef": "Property Preservation - The ability for Single Family to monitor the completion of property inspection, required maintenance and improvements for the purpose of maintaining property value and marketability in order to minimize loss and maximize return related to the disposition of the property.  "
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Securities & Other Instruments",
            "segmentdef": "Securities & Other Instruments - A grouping of capabilities that enable Fannie Mae to expand the scope of MBS capabilities to include CRT and other financial instruments.",
            "capability": "Bond Administration",
            "capabilitydef": "Bond Administration - The ability for Fannie Mae to manage a security or instrument throughout its lifecycle, including processing of collateral updates, determining investor payments / obligations, onboarding instruments, performing instrument adjustments, and distributing investor payments."
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Securities & Other Instruments",
            "segmentdef": "Securities & Other Instruments - A grouping of capabilities that enable Fannie Mae to expand the scope of MBS capabilities to include CRT and other financial instruments.",
            "capability": "Disclosure Management",
            "capabilitydef": "Disclosure Management - The ability to provide information to investors and the market regarding a security or instrument and related collateral at time of issuance and periodically throughout the life of the instrument. This includes disclosure generation, reconciliation, correction, publication and administration."
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Securities & Other Instruments",
            "segmentdef": "Securities & Other Instruments - A grouping of capabilities that enable Fannie Mae to expand the scope of MBS capabilities to include CRT and other financial instruments.",
            "capability": "Formation",
            "capabilitydef": "Formation - The ability to design and finalize a security structure and collateral in accordance with requirements for the specific type of instrument being created. This includes selection and confirmation of collateral underlying the instrument."
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Securities & Other Instruments",
            "segmentdef": "Securities & Other Instruments - A grouping of capabilities that enable Fannie Mae to expand the scope of MBS capabilities to include CRT and other financial instruments.",
            "capability": "Issuance",
            "capabilitydef": "Issuance - The ability to record, register, settle, and cancel a security or other instrument with the appropriate regulatory body prior to release to the market for trading."
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Securities & Other Instruments",
            "segmentdef": "Securities & Other Instruments - A grouping of capabilities that enable Fannie Mae to expand the scope of MBS capabilities to include CRT and other financial instruments.",
            "capability": "Trust Management",
            "capabilitydef": "Trust Management - The ability to manage legal obligations of trustee for financial instruments held in trust as collateral for a security or other instrument, including trust compliance, management of trust accounts, etc. This includes Trust document, compliance and funds management as well as loan reclassification."
        },
        {
            "tranche": "Customers & Markets",
            "tranchedef": "Customers & Markets - An organized view of capabilities that enable Fannie Mae to develop / monitor organizational strategy, nurture existing relationships and attract new customers / strategic partners while promoting a culture of innovation, experimentation and customer centricity.",
            "segment": "Relationships",
            "segmentdef": "Relationships - A grouping of capabilities that enable holistic customer and strategic partnership management across Fannie Mae.",
            "capability": "Customer Management",
            "capabilitydef": "Customer Management - The ability for Fannie Mae to engage holistically with customers across their lifecycle to understand their needs, develop account plans, transact business and monitor accounts in a coordinated way across the enterprise.  This includes establishing / deepening relationships with potential and current customers, onboarding / offboarding, profile / contact management, customer service (including management of SLAs), customer education / training, customer performance monitoring, and identification of business opportunities and metrics."
        },
        {
            "tranche": "Customers & Markets",
            "tranchedef": "Customers & Markets - An organized view of capabilities that enable Fannie Mae to develop / monitor organizational strategy, nurture existing relationships and attract new customers / strategic partners while promoting a culture of innovation, experimentation and customer centricity.",
            "segment": "Relationships",
            "segmentdef": "Relationships - A grouping of capabilities that enable holistic customer and strategic partnership management across Fannie Mae.",
            "capability": "Partner Management",
            "capabilitydef": "Partner Management - The ability for Fannie Mae to holistically engage with strategic partners such as vendors, suppliers, TSPs, etc. that co-create shared value with Fannie Mae in order to effectively plan, analyze, manage, monitor and understand partner relationships.  This includes establishing / deepening relationships with potential and current partners, onboarding / offboarding, profile / contact management, management of SLAs, partner performance monitoring, and identification of business opportunities and metrics."
        },
        {
            "tranche": "Customers & Markets",
            "tranchedef": "Customers & Markets - An organized view of capabilities that enable Fannie Mae to develop / monitor organizational strategy, nurture existing relationships and attract new customers / strategic partners while promoting a culture of innovation, experimentation and customer centricity.",
            "segment": "Relationships",
            "segmentdef": "Relationships - A grouping of capabilities that enable holistic customer and strategic partnership management across Fannie Mae.",
            "capability": "Regulator Engagement",
            "capabilitydef": "Regulator Engagement - The ability to holistically engage with the Fannie Mae regulator in order to effectively plan, analyze, manage, monitor and report on compliance to established scorecards, guidelines and laws in a coordinated way. This includes responding to Matters Requiring Attention (MRAs) as well as coordinating reviews of requested processes/information with the regulator. "
        },
        {
            "tranche": "Customers & Markets",
            "tranchedef": "Customers & Markets - An organized view of capabilities that enable Fannie Mae to develop / monitor organizational strategy, nurture existing relationships and attract new customers / strategic partners while promoting a culture of innovation, experimentation and customer centricity.",
            "segment": "Strategic Outlook",
            "segmentdef": "Strategic Outlook - A grouping of capabilities that enable Fannie Mae to drive the organization onto a common approach to ensure all transformation efforts reinforce one another.",
            "capability": "Communications Management",
            "capabilitydef": "Communications Management - The ability to systematically plan, implement, manage and monitor all internal and external Fannie Mae communications, including organization and dissemination of directives, development of corporate communication strategy, and information flow management."
        },
        {
            "tranche": "Customers & Markets",
            "tranchedef": "Customers & Markets - An organized view of capabilities that enable Fannie Mae to develop / monitor organizational strategy, nurture existing relationships and attract new customers / strategic partners while promoting a culture of innovation, experimentation and customer centricity.",
            "segment": "Strategic Outlook",
            "segmentdef": "Strategic Outlook - A grouping of capabilities that enable Fannie Mae to drive the organization onto a common approach to ensure all transformation efforts reinforce one another.",
            "capability": "Strategy Management",
            "capabilitydef": "Strategy Management - The ability to define, analyze, plan, and execute the desired future state of the company in order to establish, align and communicate the mission, vision, goals, objectives across the enterprise. This includes analysis and assimilation of business insights, any acquisitions and divestitures strategy, as well as monitoring strategy realization.   "
        },
        {
            "tranche": "Customers & Markets",
            "tranchedef": "Customers & Markets - An organized view of capabilities that enable Fannie Mae to develop / monitor organizational strategy, nurture existing relationships and attract new customers / strategic partners while promoting a culture of innovation, experimentation and customer centricity.",
            "segment": "Strategic Outlook",
            "segmentdef": "Strategic Outlook - A grouping of capabilities that enable Fannie Mae to drive the organization onto a common approach to ensure all transformation efforts reinforce one another.",
            "capability": "Environmental, Social & Governance Investing",
            "capabilitydef": "Environmental, Social & Governance Investing - The ability to organize, analyze, and administer a framework with the purpose of establishing a set of criteria and standards for sustainable, responsible and ethical investments. Environmental criteria/standards relates to how the company performs as a steward of the natural environment. Social criteria/standards examine relationships with its employees, suppliers, customers and the communities where it operates. Governance deals with how the organization is structured in terms of leadership, executive pay, audits, internal controls and shareholder rights."
        },
        {
            "tranche": "Customers & Markets",
            "tranchedef": "Customers & Markets - An organized view of capabilities that enable Fannie Mae to develop / monitor organizational strategy, nurture existing relationships and attract new customers / strategic partners while promoting a culture of innovation, experimentation and customer centricity.",
            "segment": "Strategic Outlook",
            "segmentdef": "Strategic Outlook - A grouping of capabilities that enable Fannie Mae to drive the organization onto a common approach to ensure all transformation efforts reinforce one another.",
            "capability": "Project Portfolio Management",
            "capabilitydef": "Project Portfolio Management - The ability to establish, organize, analyze, and administer a framework to translate strategic objectives and priorities into program and project-based activities based on their perceived value add, risk profile, or other established/agreed criteria. Assess the impact of current and proposed strategies in a structured manner. Ensure that business unit planned activities are aligned to the overall strategic vision. Enable impact assessment and rollout plan for changes to policies, projects, business architecture, etc. "
        },
        {
            "tranche": "Customers & Markets",
            "tranchedef": "Customers & Markets - An organized view of capabilities that enable Fannie Mae to develop / monitor organizational strategy, nurture existing relationships and attract new customers / strategic partners while promoting a culture of innovation, experimentation and customer centricity.",
            "segment": "Strategic Outlook",
            "segmentdef": "Strategic Outlook - A grouping of capabilities that enable Fannie Mae to drive the organization onto a common approach to ensure all transformation efforts reinforce one another.",
            "capability": "Marketing & Brand Management",
            "capabilitydef": "Marketing & Brand Management - The ability to define, manage, execute and manage marketing and brand strategy, including media, content and events, by performing market research, identifying and prioritizing opportunities in order to establish, align and communicate key values and brand messages/imagery. This includes gathering information about markets and customers to provide a basis for business strategy changes and tracking performance of marketing campaigns. This also encompasses ensuring consistent, coordinated and branded communications with our customers and partners. "
        },
        {
            "tranche": "Customers & Markets",
            "tranchedef": "Customers & Markets - An organized view of capabilities that enable Fannie Mae to develop / monitor organizational strategy, nurture existing relationships and attract new customers / strategic partners while promoting a culture of innovation, experimentation and customer centricity.",
            "segment": "Strategic Outlook",
            "segmentdef": "Strategic Outlook - A grouping of capabilities that enable Fannie Mae to drive the organization onto a common approach to ensure all transformation efforts reinforce one another.",
            "capability": "Regulations & Directives Integration",
            "capabilitydef": "Regulations & Directives Integration - The ability to effectively plan, analyze, execute, manage, incorporate, maintain and monitor applicable laws and instructions defined by industry regulators into current/future business frameworks in order to lawfully operate the business."
        },
        {
            "tranche": "Customers & Markets",
            "tranchedef": "Customers & Markets - An organized view of capabilities that enable Fannie Mae to develop / monitor organizational strategy, nurture existing relationships and attract new customers / strategic partners while promoting a culture of innovation, experimentation and customer centricity.",
            "segment": "Strategic Outlook",
            "segmentdef": "Strategic Outlook - A grouping of capabilities that enable Fannie Mae to drive the organization onto a common approach to ensure all transformation efforts reinforce one another.",
            "capability": "Product Management",
            "capabilitydef": "Product Management - The ability for Fannie Mae to capture and analyze ideas for new product initiatives, including cost benefit analysis, due diligence, review and approval and ongoing management."
        },
        {
            "tranche": "Customers & Markets",
            "tranchedef": "Customers & Markets - An organized view of capabilities that enable Fannie Mae to develop / monitor organizational strategy, nurture existing relationships and attract new customers / strategic partners while promoting a culture of innovation, experimentation and customer centricity.",
            "segment": "Culture",
            "segmentdef": "Culture - A grouping of capabilities that enable the establishment of healthy beliefs / behaviors that foster a positive, effective, and efficient work environment at Fannie Mae.",
            "capability": "Continuous Improvement",
            "capabilitydef": "Continuous Improvement - The ability to enable a culture focused on working in a lean way that puts the customer at the center of what we do."
        },
        {
            "tranche": "Customers & Markets",
            "tranchedef": "Customers & Markets - An organized view of capabilities that enable Fannie Mae to develop / monitor organizational strategy, nurture existing relationships and attract new customers / strategic partners while promoting a culture of innovation, experimentation and customer centricity.",
            "segment": "Culture",
            "segmentdef": "Culture - A grouping of capabilities that enable the establishment of healthy beliefs / behaviors that foster a positive, effective, and efficient work environment at Fannie Mae.",
            "capability": "Customer Centric Experiences",
            "capabilitydef": "Customer Centric Experiences - The ability to define, design, deliver, monitor and measure activities across all business ecosystem participants in order to ensure effective, consistent, coordinated and branded encounters, contacts, interactions and experiences across all channels and touch points. "
        },
        {
            "tranche": "Customers & Markets",
            "tranchedef": "Customers & Markets - An organized view of capabilities that enable Fannie Mae to develop / monitor organizational strategy, nurture existing relationships and attract new customers / strategic partners while promoting a culture of innovation, experimentation and customer centricity.",
            "segment": "Culture",
            "segmentdef": "Culture - A grouping of capabilities that enable the establishment of healthy beliefs / behaviors that foster a positive, effective, and efficient work environment at Fannie Mae.",
            "capability": "Innovation Incubation",
            "capabilitydef": "Innovation Incubation - The ability to enhance the company's offerings, relationships, and channels through the conceptualization, development, assessment (through proof-of-concepts, pilots, etc.) of products and services in order to enhance and/or maintain the value proposition and market differentiation. This includes innovation prioritization, developing approaches for a new idea and securing funding/execution options to bring the concept to market."
        },
        {
            "tranche": "Customers & Markets",
            "tranchedef": "Customers & Markets - An organized view of capabilities that enable Fannie Mae to develop / monitor organizational strategy, nurture existing relationships and attract new customers / strategic partners while promoting a culture of innovation, experimentation and customer centricity.",
            "segment": "Culture",
            "segmentdef": "Culture - A grouping of capabilities that enable the establishment of healthy beliefs / behaviors that foster a positive, effective, and efficient work environment at Fannie Mae.",
            "capability": "Test & Learn Experimentation",
            "capabilitydef": "Test & Learn Experimentation - The ability to create a culture that manages changes and investments via a hypothesis driven approach, where hypothesis are tested via experiments and decisions are made based on results or findings of the experiment as opposed to opinion. Thus enabling lower opportunity costs, greater speed to market and a leaner organization."
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Shared",
            "segmentdef": "Shared - A grouping of capabilities that enable Fannie Mae to process and execute transactions between two or more parties to exchange one or more assets for payment.",
            "capability": "Valuation Management",
            "capabilitydef": "Valuation Management - The ability to assess the worth of financial instruments in support of accounting, financial reporting and controls, and to establish what an asset is worth by various assessment methods; including loss allowance calculation, appraisals, broker price opinion, automated valuation model, sales history, tax records, market data, etc. in order to support business decisions."
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Shared",
            "segmentdef": "Shared - A grouping of capabilities that enable Fannie Mae to process and execute transactions between two or more parties to exchange one or more assets for payment.",
            "capability": "Trading / Execution",
            "capabilitydef": "Trading / Execution - The ability for Fannie Mae to buy and sell loans, securities (e.g., MBS, Megas, REMICs, Debt), and other instruments (e.g., Derivatives) in the financial markets including pipeline management, early funding, fulfillment, confirmation, and allocation."
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Shared",
            "segmentdef": "Shared - A grouping of capabilities that enable Fannie Mae to process and execute transactions between two or more parties to exchange one or more assets for payment.",
            "capability": "Delivery / Settlement",
            "capabilitydef": "Delivery / Settlement - The ability for Fannie Mae to receive and verify loans, securities (e.g., MBS, Megas, REMICs, Debt), and other instruments (e.g., Derivatives) from customers or partners and perform the necessary steps to acquire the asset, including screening (e.g., OFAC scan), exchange of security or other payment within expected date, reconciliation, and release of a financial instrument to the market."
        },
        {
            "tranche": "Journeys & Core",
            "tranchedef": "Journeys & Core - An organized view of capabilities that enable Fannie Mae to deliver the products and services to delight our customers, especially those needed to support our customer's journeys.",
            "segment": "Shared",
            "segmentdef": "Shared - A grouping of capabilities that enable Fannie Mae to process and execute transactions between two or more parties to exchange one or more assets for payment.",
            "capability": "Pricing",
            "capabilitydef": "Pricing - The ability to determine the appropriate pricing structure for customers and/or products based on current data and algorithms, methods and schedules used to calculate pricing of loans, securities and other financial instruments; includes pricing administration, pricing governance, and pricing execution "
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Financial",
            "segmentdef": "Financial - A grouping of capabilities that enable Fannie Mae to expand foundational capabilities to support accounting, Treasury and centralized billing / accounts payable.",
            "capability": "Capital Management",
            "capabilitydef": "Capital Management - The ability for Fannie Mae to maintain a good ratio between working capital, assets and liabilities to ensure the most financially efficient operation of the company, in alignment with regulatory requirements, ensuring adequate means to meet its day to day expenses, as well as financial obligations in the short-term. The capability entails activities such as assessing capital needs, monitoring available capital, analyzing capital impact of business decisions, etc."
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Financial",
            "segmentdef": "Financial - A grouping of capabilities that enable Fannie Mae to expand foundational capabilities to support accounting, Treasury and centralized billing / accounts payable.",
            "capability": "Financial Accounting",
            "capabilitydef": "Financial Accounting - The ability to perform routine corporate, loan, REO, security, guaranty, equity investments, loss allowance and Treasury accounting functions in keeping with GAAP, as appropriate, in order to accurately represent Fannie Mae's financial statements. "
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Financial",
            "segmentdef": "Financial - A grouping of capabilities that enable Fannie Mae to expand foundational capabilities to support accounting, Treasury and centralized billing / accounts payable.",
            "capability": "Financial Management & Reporting",
            "capabilitydef": "Financial Management & Reporting - The ability to perform required financial functions to accurately represent Fannie Mae's financial standing. Including financial planning/stress testing, forecasting, budgeting, financial reporting, profitability transparency/management, multi-dimensional reporting, performed as a core team and/or internal consulting role."
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Financial",
            "segmentdef": "Financial - A grouping of capabilities that enable Fannie Mae to expand foundational capabilities to support accounting, Treasury and centralized billing / accounts payable.",
            "capability": "Payables & Receivables",
            "capabilitydef": "Payables & Receivables - The ability for Fannie Mae to process requests for reimbursement from customers or partners for expenses, including requests from servicers, MI companies, etc.   "
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Financial",
            "segmentdef": "Financial - A grouping of capabilities that enable Fannie Mae to expand foundational capabilities to support accounting, Treasury and centralized billing / accounts payable.",
            "capability": "Tax Management",
            "capabilitydef": "Tax Management - The ability to ensure that books and records are sufficient for tax responsibilities and ensure taxes are properly computed and filed in a timely manner in order to meet federal, state and local requirements; includes ensuring compliance to all tax regulations, responding to tax related inquiries and preparing / filing tax returns and reporting."
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Financial",
            "segmentdef": "Financial - A grouping of capabilities that enable Fannie Mae to expand foundational capabilities to support accounting, Treasury and centralized billing / accounts payable.",
            "capability": "Cash Management",
            "capabilitydef": "Cash Management - The ability to manage, maintain, and monitor the process of collecting (short-term) investing cash in order to ensure a company's financial stability and solvency; includes managing cash transfers between Fannie Mae and third parties, performing cash reconciliations, managing the administration of bank accounts for Fannie Mae business units and cash forecast/cash position management. "
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Financial",
            "segmentdef": "Financial - A grouping of capabilities that enable Fannie Mae to expand foundational capabilities to support accounting, Treasury and centralized billing / accounts payable.",
            "capability": "Balance Sheet Management",
            "capabilitydef": "Balance Sheet Management - The ability for Fannie Mae to perform activities associated with monitoring and maintaining its assets and liabilities in order to satisfy regulatory requirements and support risk management."
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Risk",
            "segmentdef": "Risk - A grouping of capabilities that enable Fannie Mae to centralize governance of enterprise risk and the establishment of risk policies / guidance for business units.",
            "capability": "Physical & Cyber Security",
            "capabilitydef": "Physical & Cyber Security - The ability to identify, protect, detect, respond and recover from internal, external and digital disruption threats to organizational assets, including facilities, people, process, technology and data/information; including identity and access management."
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Risk",
            "segmentdef": "Risk - A grouping of capabilities that enable Fannie Mae to centralize governance of enterprise risk and the establishment of risk policies / guidance for business units.",
            "capability": "Governance & Compliance",
            "capabilitydef": "Governance & Compliance - The ability to establish rules and frameworks to govern Fannie Mae and our customers, partners and vendors/suppliers based upon risk and reward analysis as well as agreed upon risk appetite and limits. This includes definition of policies, standards and procedures (including selling and servicing guides for customers) as well as monitoring and reporting on compliance to established rules and frameworks. This also includes program/project governance, data governance and architecture governance."
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Risk",
            "segmentdef": "Risk - A grouping of capabilities that enable Fannie Mae to centralize governance of enterprise risk and the establishment of risk policies / guidance for business units.",
            "capability": "Insurance Management",
            "capabilitydef": "Insurance Management - The ability for Fannie Mae to verify or obtain a guarantee of compensation for specified loss, damage, illness, or death in return for payment of a premium. This includes primary mortgage insurance, backend mortgage insurance, title insurance, property hazard insurance and corporate insurance."
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Risk",
            "segmentdef": "Risk - A grouping of capabilities that enable Fannie Mae to centralize governance of enterprise risk and the establishment of risk policies / guidance for business units.",
            "capability": "Audit Management",
            "capabilitydef": "Audit Management - The ability to establish a systematic, disciplined approach in order to evaluate, monitor and improve the effectiveness of risk management, internal control and governance processes. This includes definition of the audit framework, internal controls management, audit execution and external audit support. "
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Risk",
            "segmentdef": "Risk - A grouping of capabilities that enable Fannie Mae to centralize governance of enterprise risk and the establishment of risk policies / guidance for business units.",
            "capability": "Enterprise Resiliency",
            "capabilitydef": "Enterprise Resiliency - The ability to maintain a resilient enterprise that provides for the safety of employees, minimizes financial loss, and provides reliable services to its members, customers, and counterparties. Includes all processes required to rapidly adapt and respond to any internal or external opportunity, demand, disruption, or threat. Applies to all business units, plans, processes, and operations across the Fannie Mae enterprise, as well as their associated people, technology, and facilities. It includes the practice of planning, building, managing, and governing activities that identify and mitigate risks before incidents, preparing for and responding to disruptive events in a manner that demonstrates command and control, and recovering/restoring business operations and functions following an Incident."
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Risk",
            "segmentdef": "Risk - A grouping of capabilities that enable Fannie Mae to centralize governance of enterprise risk and the establishment of risk policies / guidance for business units.",
            "capability": "Risk Management",
            "capabilitydef": "Risk Management - The ability to establish a framework to identify, assess, respond, monitor and report on interest rate risk, market risk, collateral risk, operational risk, strategic risk, investment risk (e.g., hedging investments to strategically offset the risk of adverse price movements), competitive risk (from disruptors or existing companies) and reputational risk, including definition and management of internal controls."
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Corporate Services",
            "segmentdef": "Corporate Services - A grouping of capabilities that support the business internally across Fannie Mae.",
            "capability": "Legal Services",
            "capabilitydef": "Legal Services - The ability to provide litigation services, legal advice and other support services related to law and regulation.  Includes internal counsel as well as oversight, selection and engagement of external counsel and selection of legal resources including reference works and subscriptions.  Includes provision of legal expertise on products, financial transactions, credit policies & standards, servicing and default management, consumer, regulatory and investor obligations."
        },
        {
            "tranche": "Enabling & Supporting",
            "tranchedef": "Enabling & Supporting - An organized view of the capabilities that enable Fannie Mae to carry out specialized tasks required by the organization to fulfill day-to-day needs and ensuring compliance with Fannie Mae policies / guidelines while raising capital to sustain Fannie Mae operations. ",
            "segment": "Corporate Services",
            "segmentdef": "Corporate Services - A grouping of capabilities that support the business internally across Fannie Mae.",
            "capability": "Investigations Management",
            "capabilitydef": "Investigations Management - The ability to research, document and determine evidence and facts in the event of alleged violations of the Code of Conduct or regulatory compliance issue in order to pursue any further action; includes detection and investigation of fraud."
        },
        {
            "tranche": "Customers & Markets",
            "tranchedef": "Customers & Markets - An organized view of capabilities that enable Fannie Mae to develop / monitor organizational strategy, nurture existing relationships and attract new customers / strategic partners while promoting a culture of innovation, experimentation and customer centricity.",
            "segment": "Relationships",
            "segmentdef": "Relationships - A grouping of capabilities that enable holistic customer and strategic partnership management across Fannie Mae.",
            "capability": "Human Capital Management",
            "capabilitydef": "Human Capital Management - The ability to manage recruiting, compensation, benefits administration, payroll services, retention and retirement, training and development and performance of human resources. This includes human capital planning, corporate giving and transformation of workforce and corporate culture."
        }
      ];
      return json;
    }  
}
