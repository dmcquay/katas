/* tslint:disable:max-line-length no-empty-interface */
export interface IAddOnly_EmployeeInput {
    /** urn:com.workday/bsvc#xsd:string(undefined) */
    Employee_ID: string;
    Applicant_Reference: StaffingTypes.IApplicant_Reference;
    Former_Worker_Reference: StaffingTypes.IFormer_Worker_Reference;
    Employee_Type_Reference: StaffingTypes.IEmployee_Type_Reference;
    Hire_Reason_Reference: StaffingTypes.IHire_Reason_Reference;
    /** urn:com.workday/bsvc#xsd:date(undefined) */
    First_Day_of_Work: date;
    /** urn:com.workday/bsvc#xsd:date(undefined) */
    Hire_Date: date;
    /** urn:com.workday/bsvc#xsd:date(undefined) */
    Continuous_Service_Date: date;
    /** urn:com.workday/bsvc#xsd:date(undefined) */
    Probation_Start_Date: date;
    /** urn:com.workday/bsvc#xsd:date(undefined) */
    Probation_End_Date: date;
    /** urn:com.workday/bsvc#xsd:date(undefined) */
    End_Employment_Date: date;
    /** urn:com.workday/bsvc#xsd:date(undefined) */
    Position_Start_Date_for_Conversion: date;
    /** urn:com.workday/bsvc#xsd:date(undefined) */
    Job_Profile_Start_Date_for_Conversion: date;
    /** urn:com.workday/bsvc#xsd:date(undefined) */
    Benefits_Service_Date: date;
    /** urn:com.workday/bsvc#xsd:date(undefined) */
    Company_Service_Date: date;
    Position_for_Worker_Staffing_Event_Data: StaffingTypes.IPosition_for_Worker_Staffing_Event_Data;
    Compensation_Detail_Data: StaffingTypes.ICompensation_Detail_Data;
    Position_Payroll_Data_for_Worker_Data: StaffingTypes.IPosition_Payroll_Data_for_Worker_Data;
    /** urn:com.workday/bsvc#xsd:boolean(undefined) */
    Create_Payroll_Extract: boolean;
    Position_Organization_Assignments_Data: {
        Company_Assignments_Reference: Array<StaffingTypes.ICompany_Assignments_Reference>;
        Cost_Center_Assignments_Reference: Array<StaffingTypes.ICost_Center_Assignments_Reference>;
        Region_Assignments_Reference: Array<StaffingTypes.IRegion_Assignments_Reference>;
        Custom_Organization_Assignments_Reference: Array<StaffingTypes.ICustom_Organization_Assignments_Reference>;
        Fund_Assignments_Reference: Array<StaffingTypes.IFund_Assignments_Reference>;
        Grant_Assignments_Reference: Array<StaffingTypes.IGrant_Assignments_Reference>;
        Program_Assignments_Reference: Array<StaffingTypes.IProgram_Assignments_Reference>;
        Business_Unit_Assignments_Reference: Array<StaffingTypes.IBusiness_Unit_Assignments_Reference>;
        Gift_Assignments_Reference: Array<StaffingTypes.IGift_Assignments_Reference>;
    };
    System_User_Data: StaffingTypes.ISystem_User_Data;
    Worker_Document_Data: Array<{
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Filename: maxLength;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Worker_Document_Comment: string;
        Document_Category_Reference: StaffingTypes.IDocument_Category_Reference;
        /** urn:com.workday/bsvc#xsd:base64Binary(undefined) */
        File: base64Binary;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Content_Type: maxLength;
    }>;
    Employee_External_ID_Data: StaffingTypes.IEmployee_External_ID_Data;
}

export interface IAddOnly_EmployeeOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
    Employee_Reference: StaffingTypes.IEmployee_Reference;
    Position_Reference: StaffingTypes.IPosition_Reference;
    Applicant_Reference: StaffingTypes.IApplicant_Reference;
    Exceptions_Response_Data: Array<StaffingTypes.IExceptions_Response_Data>;
}

export interface ITerminate_EmployeeInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Terminate_Employee_Data: StaffingTypes.ITerminate_Employee_Data;
}

export interface ITerminate_EmployeeOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
}

export interface IGet_WorkersInput {
    Request_References: {
        Worker_Reference: Array<StaffingTypes.IWorker_Reference>;
    };
    Request_Criteria: {
        Transaction_Log_Criteria_Data: Array<StaffingTypes.ITransaction_Log_Criteria_Data>;
        Organization_Reference: Array<StaffingTypes.IOrganization_Reference>;
        Country_Reference: Array<StaffingTypes.ICountry_Reference>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Subordinate_Organizations: boolean;
        Position_Reference: Array<StaffingTypes.IPosition_Reference>;
        Event_Reference: StaffingTypes.IEvent_Reference;
        Benefit_Plan_Reference: Array<StaffingTypes.IBenefit_Plan_Reference>;
        Field_And_Parameter_Criteria_Data: StaffingTypes.IField_And_Parameter_Criteria_Data;
        National_ID_Criteria_Data: Array<StaffingTypes.INational_ID_Criteria_Data>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Inactive_Workers: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Employees: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Contingent_Workers: boolean;
        Eligibility_Criteria_Data: Array<StaffingTypes.IEligibility_Criteria_Data>;
        Universal_ID_Reference: Array<StaffingTypes.IUniversal_ID_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Personal_Information: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Additional_Jobs: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Employment_Information: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Compensation: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Organizations: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Organization_Support_Role_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Location_Hierarchies: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Cost_Centers: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Cost_Center_Hierarchies: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Companies: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Company_Hierarchies: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Matrix_Organizations: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Pay_Groups: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Regions: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Region_Hierarchies: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Supervisory_Organizations: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Teams: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Custom_Organizations: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Roles: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Management_Chain_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Multiple_Managers_in_Management_Chain_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Benefit_Enrollments: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Benefit_Eligibility: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Related_Persons: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Qualifications: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Employee_Review: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Goals: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Development_Items: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Skills: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Photo: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Worker_Documents: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Transaction_Log_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Subevents_for_Corrected_Transaction: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Subevents_for_Rescinded_Transaction: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Succession_Profile: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Talent_Assessment: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Employee_Contract_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Contracts_for_Terminated_Workers: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Collective_Agreement_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Probation_Period_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Extended_Employee_Contract_Details: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Feedback_Received: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_User_Account: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Career: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Account_Provisioning: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Background_Check_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Contingent_Worker_Tax_Authority_Form_Information: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Funds: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Fund_Hierarchies: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Grants: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Grant_Hierarchies: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Business_Units: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Business_Unit_Hierarchies: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Programs: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Program_Hierarchies: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Gifts: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Gift_Hierarchies: boolean;
    };
}

export interface IGet_WorkersOutput {
    Request_References: {
        Worker_Reference: Array<StaffingTypes.IWorker_Reference>;
    };
    Request_Criteria: {
        Transaction_Log_Criteria_Data: Array<StaffingTypes.ITransaction_Log_Criteria_Data>;
        Organization_Reference: Array<StaffingTypes.IOrganization_Reference>;
        Country_Reference: Array<StaffingTypes.ICountry_Reference>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Subordinate_Organizations: boolean;
        Position_Reference: Array<StaffingTypes.IPosition_Reference>;
        Event_Reference: StaffingTypes.IEvent_Reference;
        Benefit_Plan_Reference: Array<StaffingTypes.IBenefit_Plan_Reference>;
        Field_And_Parameter_Criteria_Data: StaffingTypes.IField_And_Parameter_Criteria_Data;
        National_ID_Criteria_Data: Array<StaffingTypes.INational_ID_Criteria_Data>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Inactive_Workers: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Employees: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Contingent_Workers: boolean;
        Eligibility_Criteria_Data: Array<StaffingTypes.IEligibility_Criteria_Data>;
        Universal_ID_Reference: Array<StaffingTypes.IUniversal_ID_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Personal_Information: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Additional_Jobs: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Employment_Information: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Compensation: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Organizations: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Organization_Support_Role_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Location_Hierarchies: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Cost_Centers: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Cost_Center_Hierarchies: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Companies: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Company_Hierarchies: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Matrix_Organizations: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Pay_Groups: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Regions: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Region_Hierarchies: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Supervisory_Organizations: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Teams: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Custom_Organizations: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Roles: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Management_Chain_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Multiple_Managers_in_Management_Chain_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Benefit_Enrollments: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Benefit_Eligibility: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Related_Persons: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Qualifications: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Employee_Review: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Goals: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Development_Items: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Skills: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Photo: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Worker_Documents: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Transaction_Log_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Subevents_for_Corrected_Transaction: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Subevents_for_Rescinded_Transaction: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Succession_Profile: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Talent_Assessment: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Employee_Contract_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Contracts_for_Terminated_Workers: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Collective_Agreement_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Probation_Period_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Extended_Employee_Contract_Details: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Feedback_Received: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_User_Account: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Career: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Account_Provisioning: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Background_Check_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Contingent_Worker_Tax_Authority_Form_Information: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Funds: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Fund_Hierarchies: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Grants: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Grant_Hierarchies: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Business_Units: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Business_Unit_Hierarchies: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Programs: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Program_Hierarchies: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Gifts: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Gift_Hierarchies: boolean;
    };
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Worker: StaffingTypes.IWorker[];
    };
    Invalid_Reference_ID_Response: Array<StaffingTypes.IInvalid_Reference_ID_Response>;
}

export interface IEdit_PositionInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Edit_Position_Data: StaffingTypes.IEdit_Position_Data;
}

export interface IEdit_PositionOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
    Exceptions_Response_Data: Array<StaffingTypes.IExceptions_Response_Data>;
}

export interface IHire_EmployeeInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Hire_Employee_Data: StaffingTypes.IHire_Employee_Data;
}

export interface IHire_EmployeeOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
    Employee_Reference: StaffingTypes.IEmployee_Reference;
    Position_Reference: StaffingTypes.IPosition_Reference;
    Applicant_Reference: StaffingTypes.IApplicant_Reference;
    Exceptions_Response_Data: Array<StaffingTypes.IExceptions_Response_Data>;
}

export interface IGet_ApplicantsInput {
    Request_References: {
        Applicant_Reference: Array<StaffingTypes.IApplicant_Reference>;
    };
    Request_Criteria: {
        Worker_Reference: StaffingTypes.IWorker_Reference;
        Former_Worker_Reference: StaffingTypes.IFormer_Worker_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Email_Address: string;
        Field_And_Parameter_Criteria_Data: StaffingTypes.IField_And_Parameter_Criteria_Data;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Personal_Information: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Recruiting_Information: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Qualification_Profile: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Resume: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Background_Check: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_External_Integration_ID_Data: boolean;
    };
}

export interface IGet_ApplicantsOutput {
    Request_References: {
        Applicant_Reference: Array<StaffingTypes.IApplicant_Reference>;
    };
    Request_Criteria: {
        Worker_Reference: StaffingTypes.IWorker_Reference;
        Former_Worker_Reference: StaffingTypes.IFormer_Worker_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Email_Address: string;
        Field_And_Parameter_Criteria_Data: StaffingTypes.IField_And_Parameter_Criteria_Data;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Personal_Information: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Recruiting_Information: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Qualification_Profile: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Resume: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Background_Check: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_External_Integration_ID_Data: boolean;
    };
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Applicant: Array<{
            Applicant_Reference: StaffingTypes.IApplicant_Reference;
            Applicant_Data: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                Applicant_ID: string;
                Personal_Data: StaffingTypes.IPersonal_Data;
                Qualification_Data: {
                    External_Job_History: Array<StaffingTypes.IExternal_Job_History>;
                    Competency: StaffingTypes.ICompetency[];
                    Certification: StaffingTypes.ICertification[];
                    Training: StaffingTypes.ITraining[];
                    Award_and_Activity: Array<StaffingTypes.IAward_and_Activity>;
                    Organization_Membership: Array<StaffingTypes.IOrganization_Membership>;
                    Education: StaffingTypes.IEducation[];
                    Work_Experience: Array<StaffingTypes.IWork_Experience>;
                    Language: StaffingTypes.ILanguage[];
                    Internal_Project_Experience: Array<StaffingTypes.IInternal_Project_Experience>;
                };
                Recruiting_Data: StaffingTypes.IRecruiting_Data;
                Resume_Data: {
                    Resume: StaffingTypes.IResume[];
                };
                Background_Check_Data: Array<StaffingTypes.IBackground_Check_Data>;
                External_Integration_ID_Data: StaffingTypes.IExternal_Integration_ID_Data;
                Document_Field_Result_Data: Array<StaffingTypes.IDocument_Field_Result_Data>;
            };
        }>;
    };
}

export interface IAssign_OrganizationInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Assign_Organization_Data: StaffingTypes.IAssign_Organization_Data;
}

export interface IAssign_OrganizationOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
}

export interface IPut_ApplicantInput {
    Applicant_Reference: StaffingTypes.IApplicant_Reference;
    Applicant_Data: {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Applicant_ID: string;
        Personal_Data: StaffingTypes.IPersonal_Data;
        Qualification_Data: {
            External_Job_History: Array<StaffingTypes.IExternal_Job_History>;
            Competency: StaffingTypes.ICompetency[];
            Certification: StaffingTypes.ICertification[];
            Training: StaffingTypes.ITraining[];
            Award_and_Activity: Array<StaffingTypes.IAward_and_Activity>;
            Organization_Membership: Array<StaffingTypes.IOrganization_Membership>;
            Education: StaffingTypes.IEducation[];
            Work_Experience: Array<StaffingTypes.IWork_Experience>;
            Language: StaffingTypes.ILanguage[];
            Internal_Project_Experience: Array<StaffingTypes.IInternal_Project_Experience>;
        };
        Recruiting_Data: StaffingTypes.IRecruiting_Data;
        Resume_Data: {
            Resume: StaffingTypes.IResume[];
        };
        Background_Check_Data: Array<StaffingTypes.IBackground_Check_Data>;
        External_Integration_ID_Data: StaffingTypes.IExternal_Integration_ID_Data;
        Document_Field_Result_Data: Array<StaffingTypes.IDocument_Field_Result_Data>;
    };
}

export interface IPut_ApplicantOutput {
    Applicant_Reference: StaffingTypes.IApplicant_Reference;
    Exceptions_Response_Data: Array<StaffingTypes.IExceptions_Response_Data>;
}

export interface IEnd_Contingent_Worker_ContractInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    End_Contingent_Worker_Contract_Data: StaffingTypes.IEnd_Contingent_Worker_Contract_Data;
}

export interface IEnd_Contingent_Worker_ContractOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
}

export interface IContract_Contingent_WorkerInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Contract_Contingent_Worker_Data: StaffingTypes.IContract_Contingent_Worker_Data;
}

export interface IContract_Contingent_WorkerOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
    Contingent_Worker_Reference: StaffingTypes.IContingent_Worker_Reference;
    Position_Reference: StaffingTypes.IPosition_Reference;
    Applicant_Reference: StaffingTypes.IApplicant_Reference;
    Exceptions_Response_Data: Array<StaffingTypes.IExceptions_Response_Data>;
}

export interface IPut_DependentInput {
    Dependent_Reference: StaffingTypes.IDependent_Reference;
    Dependent_Data: {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Dependent_ID: string;
        Employee_Reference: StaffingTypes.IEmployee_Reference;
        Existing_Related_Person_Reference: StaffingTypes.IExisting_Related_Person_Reference;
        Related_Person_Relationship_Reference: StaffingTypes.IRelated_Person_Relationship_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Use_Employee_Address: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Use_Employee_Phone: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Irrevocable: boolean;
        Dependent_Personal_Information_Data: StaffingTypes.IDependent_Personal_Information_Data;
        Court_Order_Replacement_Data: Array<StaffingTypes.ICourt_Order_Replacement_Data>;
    };
}

export interface IPut_DependentOutput {
    Dependent_Reference: StaffingTypes.IDependent_Reference;
    Employee_Reference: StaffingTypes.IEmployee_Reference;
    Exceptions_Response_Data: Array<StaffingTypes.IExceptions_Response_Data>;
}

export interface ICreate_PositionInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Create_Position_Data: StaffingTypes.ICreate_Position_Data;
}

export interface ICreate_PositionOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
    Position_Reference: StaffingTypes.IPosition_Reference;
}

export interface IGet_PositionsInput {
    Request_References: {
        Positions_Reference: Array<StaffingTypes.IPositions_Reference>;
    };
    Request_Criteria: {
        Transaction_Log_Criteria_Data: Array<StaffingTypes.ITransaction_Log_Criteria_Data>;
        Supervisory_Organization_Reference: Array<StaffingTypes.ISupervisory_Organization_Reference>;
        Job_Requisition_Reference: Array<StaffingTypes.IJob_Requisition_Reference>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Filled_Positions: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Non-Recruitable_Positions: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Ignore_Future_Positions: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Closed_Positions: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Show_Only_Closed_Positions: boolean;
        Event_Reference: StaffingTypes.IEvent_Reference;
        Field_And_Parameter_Criteria_Data: StaffingTypes.IField_And_Parameter_Criteria_Data;
        Location_Reference: Array<StaffingTypes.ILocation_Reference>;
        Additional_Locations_Reference: Array<StaffingTypes.IAdditional_Locations_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Position_Definition_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Position_Restrictions_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Default_Compensation_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Default_Position_Organization_Assignment_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Worker_For_Filled_Positions_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Qualifications: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Job_Requisition_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Job_Requisition_Attachments: boolean;
    };
}

export interface IGet_PositionsOutput {
    Request_References: Array<{
        Positions_Reference: Array<StaffingTypes.IPositions_Reference>;
    }>;
    Request_Criteria: Array<{
        Transaction_Log_Criteria_Data: Array<StaffingTypes.ITransaction_Log_Criteria_Data>;
        Supervisory_Organization_Reference: Array<StaffingTypes.ISupervisory_Organization_Reference>;
        Job_Requisition_Reference: Array<StaffingTypes.IJob_Requisition_Reference>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Filled_Positions: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_Non-Recruitable_Positions: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Ignore_Future_Positions: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Closed_Positions: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Show_Only_Closed_Positions: boolean;
        Event_Reference: StaffingTypes.IEvent_Reference;
        Field_And_Parameter_Criteria_Data: StaffingTypes.IField_And_Parameter_Criteria_Data;
        Location_Reference: Array<StaffingTypes.ILocation_Reference>;
        Additional_Locations_Reference: Array<StaffingTypes.IAdditional_Locations_Reference>;
    }>;
    Response_Filter: Array<StaffingTypes.IResponse_Filter>;
    Response_Group: Array<{
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Position_Definition_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Position_Restrictions_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Default_Compensation_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Default_Position_Organization_Assignment_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Worker_For_Filled_Positions_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Qualifications: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Job_Requisition_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Job_Requisition_Attachments: boolean;
    }>;
    Response_Results: Array<StaffingTypes.IResponse_Results>;
    Response_Data: Array<{
        Position: StaffingTypes.IPosition[];
    }>;
    Invalid_Reference_ID_Response: Array<StaffingTypes.IInvalid_Reference_ID_Response>;
}

export interface IEdit_Service_DatesInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Edit_Service_Dates_Data: StaffingTypes.IEdit_Service_Dates_Data;
}

export interface IEdit_Service_DatesOutput {
    Edit_Service_Dates_Event_Reference: StaffingTypes.IEdit_Service_Dates_Event_Reference;
}

export interface IGet_OrganizationsInput {
    Request_References: {
        Organization_Reference: Array<StaffingTypes.IOrganization_Reference>;
    };
    Request_Criteria: {
        Organization_Type_Reference: Array<StaffingTypes.IOrganization_Type_Reference>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Inactive: boolean;
        Transaction_Log_Criteria: Array<StaffingTypes.ITransaction_Log_Criteria>;
        Field_And_Parameter_Criteria_Data: StaffingTypes.IField_And_Parameter_Criteria_Data;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Roles_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Hierarchy_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Supervisory_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Staffing_Restrictions_Data: boolean;
    };
}

export interface IGet_OrganizationsOutput {
    Request_References: {
        Organization_Reference: Array<StaffingTypes.IOrganization_Reference>;
    };
    Request_Criteria: {
        Organization_Type_Reference: Array<StaffingTypes.IOrganization_Type_Reference>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Inactive: boolean;
        Transaction_Log_Criteria: Array<StaffingTypes.ITransaction_Log_Criteria>;
        Field_And_Parameter_Criteria_Data: StaffingTypes.IField_And_Parameter_Criteria_Data;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Roles_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Hierarchy_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Supervisory_Data: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Staffing_Restrictions_Data: boolean;
    };
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Organization: StaffingTypes.IOrganization[];
    };
}

export interface IEnd_Additional_JobInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    End_Additional_Job_Data: StaffingTypes.IEnd_Additional_Job_Data;
}

export interface IEnd_Additional_JobOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
}

export interface IAdd_Additional_JobInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Add_Additional_Job_Data: StaffingTypes.IAdd_Additional_Job_Data;
}

export interface IAdd_Additional_JobOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
    Employee_Reference: StaffingTypes.IEmployee_Reference;
    Job_Reference: StaffingTypes.IJob_Reference;
}

export interface IAdd_Retiree_StatusInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Add_Retiree_Status_Data: StaffingTypes.IAdd_Retiree_Status_Data;
}

export interface IAdd_Retiree_StatusOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
}

export interface IRemove_Retiree_StatusInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Remove_Retiree_Status_Data: StaffingTypes.IRemove_Retiree_Status_Data;
}

export interface IRemove_Retiree_StatusOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
}

export interface IMaintain_Employee_ContractsInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Maintain_Employee_Contracts_Data: {
        Employee_Reference: StaffingTypes.IEmployee_Reference;
        Employee_Contract_Data: Array<StaffingTypes.IEmployee_Contract_Data>;
    };
}

export interface IMaintain_Employee_ContractsOutput {
    Employee_Contract_Event_Reference: StaffingTypes.IEmployee_Contract_Event_Reference;
    Employee_Contract_Reference: Array<StaffingTypes.IEmployee_Contract_Reference>;
}

export interface IGet_Citizenship_StatusesInput {
    Request_References: {
        Citizenship_Status_Reference: Array<StaffingTypes.ICitizenship_Status_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
}

export interface IGet_Citizenship_StatusesOutput {
    Request_References: {
        Citizenship_Status_Reference: Array<StaffingTypes.ICitizenship_Status_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Citizenship_Status: Array<StaffingTypes.ICitizenship_Status>;
    };
}

export interface IPut_Citizenship_StatusInput {
    Citizenship_Status_Reference: StaffingTypes.ICitizenship_Status_Reference;
    Citizenship_Status_Data: StaffingTypes.ICitizenship_Status_Data;
}

export interface IPut_Citizenship_StatusOutput {
    Citizenship_Status_Reference: StaffingTypes.ICitizenship_Status_Reference;
}

export interface IEdit_Position_RestrictionsInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Edit_Position_Restrictions_Data: StaffingTypes.IEdit_Position_Restrictions_Data;
}

export interface IEdit_Position_RestrictionsOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
    Position_Reference: StaffingTypes.IPosition_Reference;
}

export interface IGet_Job_Classification_GroupsInput {
    Request_References: {
        Job_Classification_Group_Reference: Array<StaffingTypes.IJob_Classification_Group_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Job_Classifications: boolean;
    };
}

export interface IGet_Job_Classification_GroupsOutput {
    Request_References: {
        Job_Classification_Group_Reference: Array<StaffingTypes.IJob_Classification_Group_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Job_Classifications: boolean;
    };
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Job_Classification_Group: Array<StaffingTypes.IJob_Classification_Group>;
    };
}

export interface IPut_Job_Classification_GroupInput {
    Job_Classification_Group_Reference: StaffingTypes.IJob_Classification_Group_Reference;
    Job_Classification_Group_Data: StaffingTypes.IJob_Classification_Group_Data;
}

export interface IPut_Job_Classification_GroupOutput {
    Job_Classification_Group_Reference: StaffingTypes.IJob_Classification_Group_Reference;
}

export interface IGet_Job_FamiliesInput {
    Request_References: {
        Job_Family_Reference: Array<StaffingTypes.IJob_Family_Reference>;
    };
    Request_Criteria: {
        Field_And_Parameter_Criteria_Data: StaffingTypes.IField_And_Parameter_Criteria_Data;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_InActive_Job_Families: boolean;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Job_Profile_Info_Data: boolean;
    };
}

export interface IGet_Job_FamiliesOutput {
    Request_References: {
        Job_Family_Reference: Array<StaffingTypes.IJob_Family_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Request_Criteria: {
        Field_And_Parameter_Criteria_Data: StaffingTypes.IField_And_Parameter_Criteria_Data;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_InActive_Job_Families: boolean;
    };
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Job_Profile_Info_Data: boolean;
    };
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Job_Family: Array<StaffingTypes.IJob_Family>;
    };
}

export interface IPut_Job_FamilyInput {
    Job_Family_Reference: StaffingTypes.IJob_Family_Reference;
    Job_Family_Data: {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Name: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Summary: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Inactive: boolean;
        Job_Profile_Data: Array<StaffingTypes.IJob_Profile_Data>;
        Integration_Field_Override_Data: Array<StaffingTypes.IIntegration_Field_Override_Data>;
    };
}

export interface IPut_Job_FamilyOutput {
    Job_Family_Reference: StaffingTypes.IJob_Family_Reference;
}

export interface IGet_Job_Family_GroupsInput {
    Request_References: {
        Job_Family_Group_Reference: Array<StaffingTypes.IJob_Family_Group_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Job_Profile_Info_Data: boolean;
    };
}

export interface IGet_Job_Family_GroupsOutput {
    Request_References: {
        Job_Family_Group_Reference: Array<StaffingTypes.IJob_Family_Group_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Job_Profile_Info_Data: boolean;
    };
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Job_Family_Group: Array<StaffingTypes.IJob_Family_Group>;
    };
}

export interface IPut_Job_Family_GroupInput {
    Job_Family_Group_Reference: StaffingTypes.IJob_Family_Group_Reference;
    Job_Family_Group_Data: StaffingTypes.IJob_Family_Group_Data;
}

export interface IPut_Job_Family_GroupOutput {
    Job_Family_Groups_Reference: StaffingTypes.IJob_Family_Groups_Reference;
}

export interface IStart_International_AssignmentInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Start_International_Assignment_Data: StaffingTypes.IStart_International_Assignment_Data;
}

export interface IStart_International_AssignmentOutput {
    Start_International_Assignment_Reference: StaffingTypes.IStart_International_Assignment_Reference;
    Employee_Reference: StaffingTypes.IEmployee_Reference;
    Job_Reference: StaffingTypes.IJob_Reference;
}

export interface IEnd_International_AssignmentInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    End_International_Assignment_Data: StaffingTypes.IEnd_International_Assignment_Data;
}

export interface IEnd_International_AssignmentOutput {
    End_International_Assignment_for_Employee_Event_Reference: StaffingTypes.IEnd_International_Assignment_for_Employee_Event_Reference;
}

export interface IAssign_Organization_RolesInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Assign_Organization_Roles_Data: StaffingTypes.IAssign_Organization_Roles_Data;
}

export interface IAssign_Organization_RolesOutput {
    Assign_Roles_Event_Reference: StaffingTypes.IAssign_Roles_Event_Reference;
}

export interface IPut_Worker_DocumentInput {
    Worker_Document_Reference: StaffingTypes.IWorker_Document_Reference;
    Worker_Document_Data: {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Filename: maxLength;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Comment: string;
        /** urn:com.workday/bsvc#xsd:base64Binary(undefined) */
        File: base64Binary;
        Document_Category_Reference: StaffingTypes.IDocument_Category_Reference;
        Worker_Reference: StaffingTypes.IWorker_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Content_Type: maxLength;
    };
}

export interface IPut_Worker_DocumentOutput {
    Worker_Document_Reference: StaffingTypes.IWorker_Document_Reference;
}

export interface IGet_Worker_DocumentsInput {
    Request_References: {
        Worker_Document_Reference: Array<StaffingTypes.IWorker_Document_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Worker_Document_Data: boolean;
    };
}

export interface IGet_Worker_DocumentsOutput {
    Request_References: {
        Worker_Document_Reference: Array<StaffingTypes.IWorker_Document_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Worker_Document_Data: boolean;
    };
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Worker_Document: Array<{
            Worker_Document_Reference: StaffingTypes.IWorker_Document_Reference;
            Worker_Document_Data: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string;
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                Filename: maxLength;
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                Comment: string;
                /** urn:com.workday/bsvc#xsd:base64Binary(undefined) */
                File: base64Binary;
                Document_Category_Reference: StaffingTypes.IDocument_Category_Reference;
                Worker_Reference: StaffingTypes.IWorker_Reference;
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                Content_Type: maxLength;
            };
        }>;
    };
}

export interface IChange_JobInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Change_Job_Data: StaffingTypes.IChange_Job_Data;
}

export interface IChange_JobOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
    Exceptions_Response_Data: Array<StaffingTypes.IExceptions_Response_Data>;
}

export interface ISwitch_Primary_JobInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Switch_Primary_Position_Request_Data: StaffingTypes.ISwitch_Primary_Position_Request_Data;
}

export interface ISwitch_Primary_JobOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
    Exceptions_Response_Data: Array<StaffingTypes.IExceptions_Response_Data>;
}

export interface IClose_PositionInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Close_Restriction_Data: StaffingTypes.IClose_Restriction_Data;
}

export interface IClose_PositionOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
    Position_or_Headcount_Reference: StaffingTypes.IPosition_or_Headcount_Reference;
}

export interface IGet_Collective_AgreementsInput {
    Request_References: {
        Collective_Agreement_Reference: Array<StaffingTypes.ICollective_Agreement_Reference>;
    };
    Request_Criteria: {};
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
    };
}

export interface IGet_Collective_AgreementsOutput {
    Request_References: {
        Collective_Agreement_Reference: Array<StaffingTypes.ICollective_Agreement_Reference>;
    };
    Request_Criteria: {};
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
    };
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Collective_Agreement: Array<StaffingTypes.ICollective_Agreement>;
    };
}

export interface IPut_Collective_AgreementInput {
    Collective_Agreement_Reference: StaffingTypes.ICollective_Agreement_Reference;
    Collective_Agreement_Data: {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Agreement: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Code: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Date: date;
        Restricted_to_Countries_Reference: Array<StaffingTypes.IRestricted_to_Countries_Reference>;
        Location_Reference: Array<StaffingTypes.ILocation_Reference>;
        Collective_Agreement_Eligibility_Rule: StaffingTypes.ICollective_Agreement_Eligibility_Rule;
        Union_Reference: Array<StaffingTypes.IUnion_Reference>;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Note: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Inactive: boolean;
        Collective_Agreement_Factors_Mapping: StaffingTypes.ICollective_Agreement_Factors_Mapping;
        Collective_Agreement_Classification_Parameters: Array<StaffingTypes.ICollective_Agreement_Classification_Parameters>;
    };
}

export interface IPut_Collective_AgreementOutput {
    Collective_Agreement_Reference: StaffingTypes.ICollective_Agreement_Reference;
}

export interface IChange_Personal_InformationInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Change_Personal_Information_Data: {
        Person_Reference: StaffingTypes.IPerson_Reference;
        Universal_ID_Reference: StaffingTypes.IUniversal_ID_Reference;
        Personal_Information_Data: {
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Date_of_Birth: date;
            Birth_Country_Reference: StaffingTypes.IBirth_Country_Reference;
            Birth_Region_Reference: StaffingTypes.IBirth_Region_Reference;
            Gender_Reference: StaffingTypes.IGender_Reference;
            Disability_Information_Data: {
                Disability_Status_Information_Data: Array<{
                    Disability_Status_Reference: StaffingTypes.IDisability_Status_Reference;
                    Disability_Status_Data: {
                        Disability_Reference: StaffingTypes.IDisability_Reference;
                        /** urn:com.workday/bsvc#xsd:date(undefined) */
                        Disability_Status_Date: date;
                        /** urn:com.workday/bsvc#xsd:date(undefined) */
                        Disability_Date_Known: date;
                        /** urn:com.workday/bsvc#xsd:date(undefined) */
                        Disability_End_Date: date;
                        Disability_Grade_Reference: StaffingTypes.IDisability_Grade_Reference;
                        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                        Disability_Degree: totalDigits,minInclusive,fractionDigits;
                        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                        Disability_Remaining_Capacity: totalDigits,minInclusive,fractionDigits;
                        Disability_Certification_Authority_Reference: StaffingTypes.IDisability_Certification_Authority_Reference;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Certification_Authority: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Certified_At: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Certification_ID: string;
                        Disability_Certification_Basis_Reference: StaffingTypes.IDisability_Certification_Basis_Reference;
                        /** urn:com.workday/bsvc#xsd:date(undefined) */
                        Disability_Severity_Recognition_Date: date;
                        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                        Disability_FTE_Toward_Quota: totalDigits,minInclusive,fractionDigits;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Work_Restrictions: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Accommodations_Requested: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Accommodations_Provided: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Rehabilitation_Requested: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Rehabilitation_Provided: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Note: string;
                        Worker_Document_Reference: Array<StaffingTypes.IWorker_Document_Reference>;
                    };
                }>;
            };
            Marital_Status_Reference: StaffingTypes.IMarital_Status_Reference;
            Citizenship_Reference: Array<StaffingTypes.ICitizenship_Reference>;
            Primary_Nationality_Reference: StaffingTypes.IPrimary_Nationality_Reference;
            Additional_Nationality_Reference: Array<StaffingTypes.IAdditional_Nationality_Reference>;
            Ethnicity_Reference: Array<StaffingTypes.IEthnicity_Reference>;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Hispanic_or_Latino: boolean;
            Visual_Survey_Ethnicity_Reference: Array<StaffingTypes.IVisual_Survey_Ethnicity_Reference>;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Hispanic_or_Latino_for_Visual_Survey: boolean;
            Religion_Reference: StaffingTypes.IReligion_Reference;
            Hukou_Region_Reference: StaffingTypes.IHukou_Region_Reference;
            Hukou_Subregion_Reference: StaffingTypes.IHukou_Subregion_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Hukou_Locality: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Hukou_Postal_Code: string;
            Hukou_Type_Reference: StaffingTypes.IHukou_Type_Reference;
            Native_Region_Reference: StaffingTypes.INative_Region_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Personnel_File_Agency: string;
            Military_Information_Data: StaffingTypes.IMilitary_Information_Data;
            Political_Affiliation_Reference: StaffingTypes.IPolitical_Affiliation_Reference;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Date_of_Death: date;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            City_of_Birth: string;
            City_of_Birth_Reference: StaffingTypes.ICity_of_Birth_Reference;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Marital_Status_Date: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Last_Medical_Exam_Date: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Last_Medical_Exam_Valid_To: date;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Medical_Exam_Notes: string;
            Blood_Type_Reference: StaffingTypes.IBlood_Type_Reference;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Uses_Tobacco: boolean;
            Social_Benefits_Locality_Reference: StaffingTypes.ISocial_Benefits_Locality_Reference;
            LGBT_Identification_Reference: Array<StaffingTypes.ILGBT_Identification_Reference>;
            Sexual_Orientation_Reference: StaffingTypes.ISexual_Orientation_Reference;
            Gender_Identity_Reference: StaffingTypes.IGender_Identity_Reference;
            Pronoun_Reference: StaffingTypes.IPronoun_Reference;
            Relative_Name_Information_Data: StaffingTypes.IRelative_Name_Information_Data;
        };
    };
}

export interface IChange_Personal_InformationOutput {
    Personal_Information_Change_Event_Reference: StaffingTypes.IPersonal_Information_Change_Event_Reference;
    Personal_Information_Data: {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Date_of_Birth: date;
        Birth_Country_Reference: StaffingTypes.IBirth_Country_Reference;
        Birth_Region_Reference: StaffingTypes.IBirth_Region_Reference;
        Gender_Reference: StaffingTypes.IGender_Reference;
        Disability_Information_Data: {
            Disability_Status_Information_Data: Array<{
                Disability_Status_Reference: StaffingTypes.IDisability_Status_Reference;
                Disability_Status_Data: {
                    Disability_Reference: StaffingTypes.IDisability_Reference;
                    /** urn:com.workday/bsvc#xsd:date(undefined) */
                    Disability_Status_Date: date;
                    /** urn:com.workday/bsvc#xsd:date(undefined) */
                    Disability_Date_Known: date;
                    /** urn:com.workday/bsvc#xsd:date(undefined) */
                    Disability_End_Date: date;
                    Disability_Grade_Reference: StaffingTypes.IDisability_Grade_Reference;
                    /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                    Disability_Degree: totalDigits,minInclusive,fractionDigits;
                    /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                    Disability_Remaining_Capacity: totalDigits,minInclusive,fractionDigits;
                    Disability_Certification_Authority_Reference: StaffingTypes.IDisability_Certification_Authority_Reference;
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    Disability_Certification_Authority: string;
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    Disability_Certified_At: string;
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    Disability_Certification_ID: string;
                    Disability_Certification_Basis_Reference: StaffingTypes.IDisability_Certification_Basis_Reference;
                    /** urn:com.workday/bsvc#xsd:date(undefined) */
                    Disability_Severity_Recognition_Date: date;
                    /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                    Disability_FTE_Toward_Quota: totalDigits,minInclusive,fractionDigits;
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    Disability_Work_Restrictions: string;
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    Disability_Accommodations_Requested: string;
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    Disability_Accommodations_Provided: string;
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    Disability_Rehabilitation_Requested: string;
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    Disability_Rehabilitation_Provided: string;
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    Note: string;
                    Worker_Document_Reference: Array<StaffingTypes.IWorker_Document_Reference>;
                };
            }>;
        };
        Marital_Status_Reference: StaffingTypes.IMarital_Status_Reference;
        Citizenship_Reference: Array<StaffingTypes.ICitizenship_Reference>;
        Primary_Nationality_Reference: StaffingTypes.IPrimary_Nationality_Reference;
        Additional_Nationality_Reference: Array<StaffingTypes.IAdditional_Nationality_Reference>;
        Ethnicity_Reference: Array<StaffingTypes.IEthnicity_Reference>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Hispanic_or_Latino: boolean;
        Visual_Survey_Ethnicity_Reference: Array<StaffingTypes.IVisual_Survey_Ethnicity_Reference>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Hispanic_or_Latino_for_Visual_Survey: boolean;
        Religion_Reference: StaffingTypes.IReligion_Reference;
        Hukou_Region_Reference: StaffingTypes.IHukou_Region_Reference;
        Hukou_Subregion_Reference: StaffingTypes.IHukou_Subregion_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Hukou_Locality: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Hukou_Postal_Code: string;
        Hukou_Type_Reference: StaffingTypes.IHukou_Type_Reference;
        Native_Region_Reference: StaffingTypes.INative_Region_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Personnel_File_Agency: string;
        Military_Information_Data: StaffingTypes.IMilitary_Information_Data;
        Political_Affiliation_Reference: StaffingTypes.IPolitical_Affiliation_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Date_of_Death: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        City_of_Birth: string;
        City_of_Birth_Reference: StaffingTypes.ICity_of_Birth_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Marital_Status_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Last_Medical_Exam_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Last_Medical_Exam_Valid_To: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Medical_Exam_Notes: string;
        Blood_Type_Reference: StaffingTypes.IBlood_Type_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Uses_Tobacco: boolean;
        Social_Benefits_Locality_Reference: StaffingTypes.ISocial_Benefits_Locality_Reference;
        LGBT_Identification_Reference: Array<StaffingTypes.ILGBT_Identification_Reference>;
        Sexual_Orientation_Reference: StaffingTypes.ISexual_Orientation_Reference;
        Gender_Identity_Reference: StaffingTypes.IGender_Identity_Reference;
        Pronoun_Reference: StaffingTypes.IPronoun_Reference;
        Relative_Name_Information_Data: StaffingTypes.IRelative_Name_Information_Data;
    };
}

export interface IGet_Change_Personal_InformationInput {
    Request_References: {
        Person_Reference: Array<StaffingTypes.IPerson_Reference>;
        Universal_ID_Reference: Array<StaffingTypes.IUniversal_ID_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Request_Criteria_Data: StaffingTypes.IRequest_Criteria_Data;
}

export interface IGet_Change_Personal_InformationOutput {
    Request_References: Array<{
        Person_Reference: Array<StaffingTypes.IPerson_Reference>;
        Universal_ID_Reference: Array<StaffingTypes.IUniversal_ID_Reference>;
    }>;
    Response_Filter: Array<StaffingTypes.IResponse_Filter>;
    Response_Results: Array<StaffingTypes.IResponse_Results>;
    Response_Data: Array<{
        Change_Personal_Information: Array<StaffingTypes.IChange_Personal_Information>;
    }>;
}

export interface IGet_Change_Government_IDsInput {
    Request_References: {
        Person_Reference: Array<StaffingTypes.IPerson_Reference>;
        Universal_ID_Reference: Array<StaffingTypes.IUniversal_ID_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Request_Criteria_Data: StaffingTypes.IRequest_Criteria_Data;
}

export interface IGet_Change_Government_IDsOutput {
    Request_References: Array<{
        Person_Reference: Array<StaffingTypes.IPerson_Reference>;
        Universal_ID_Reference: Array<StaffingTypes.IUniversal_ID_Reference>;
    }>;
    Response_Filter: Array<StaffingTypes.IResponse_Filter>;
    Response_Results: Array<StaffingTypes.IResponse_Results>;
    Response_Data: Array<{
        Change_Government_IDs: Array<StaffingTypes.IChange_Government_IDs>;
    }>;
}

export interface IGet_Change_Passports_and_VisasInput {
    Request_References: {
        Person_Reference: Array<StaffingTypes.IPerson_Reference>;
        Universal_ID_Reference: Array<StaffingTypes.IUniversal_ID_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Request_Criteria_Data: StaffingTypes.IRequest_Criteria_Data;
}

export interface IGet_Change_Passports_and_VisasOutput {
    Request_References: Array<{
        Person_Reference: Array<StaffingTypes.IPerson_Reference>;
        Universal_ID_Reference: Array<StaffingTypes.IUniversal_ID_Reference>;
    }>;
    Response_Filter: Array<StaffingTypes.IResponse_Filter>;
    Response_Results: Array<StaffingTypes.IResponse_Results>;
    Response_Data: Array<{
        Change_Passports_and_Visas: Array<StaffingTypes.IChange_Passports_and_Visas>;
    }>;
}

export interface IGet_Change_LicensesInput {
    Request_References: {
        Person_Reference: Array<StaffingTypes.IPerson_Reference>;
        Universal_ID_Reference: Array<StaffingTypes.IUniversal_ID_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Request_Criteria_Data: StaffingTypes.IRequest_Criteria_Data;
}

export interface IGet_Change_LicensesOutput {
    Request_References: Array<{
        Person_Reference: Array<StaffingTypes.IPerson_Reference>;
        Universal_ID_Reference: Array<StaffingTypes.IUniversal_ID_Reference>;
    }>;
    Response_Filter: Array<StaffingTypes.IResponse_Filter>;
    Response_Results: Array<StaffingTypes.IResponse_Results>;
    Response_Data: Array<{
        Change_Licenses: Array<StaffingTypes.IChange_Licenses>;
    }>;
}

export interface IGet_Change_Other_IDsInput {
    Request_References: {
        Person_Reference: Array<StaffingTypes.IPerson_Reference>;
        Universal_ID_Reference: Array<StaffingTypes.IUniversal_ID_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Request_Criteria_Data: StaffingTypes.IRequest_Criteria_Data;
}

export interface IGet_Change_Other_IDsOutput {
    Request_References: Array<{
        Person_Reference: Array<StaffingTypes.IPerson_Reference>;
        Universal_ID_Reference: Array<StaffingTypes.IUniversal_ID_Reference>;
    }>;
    Response_Filter: Array<StaffingTypes.IResponse_Filter>;
    Response_Results: Array<StaffingTypes.IResponse_Results>;
    Response_Data: Array<{
        Change_Other_IDs: Array<StaffingTypes.IChange_Other_IDs>;
    }>;
}

export interface IGet_Change_Preferred_NameInput {
    Request_References: {
        Person_Reference: Array<StaffingTypes.IPerson_Reference>;
        Universal_ID_Reference: Array<StaffingTypes.IUniversal_ID_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Request_Criteria_Data: StaffingTypes.IRequest_Criteria_Data;
}

export interface IGet_Change_Preferred_NameOutput {
    Request_References: {
        Person_Reference: Array<StaffingTypes.IPerson_Reference>;
        Universal_ID_Reference: Array<StaffingTypes.IUniversal_ID_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Change_Preferred_Name: Array<StaffingTypes.IChange_Preferred_Name>;
    };
}

export interface IGet_Change_Legal_NameInput {
    Request_References: {
        Person_Reference: Array<StaffingTypes.IPerson_Reference>;
        Universal_ID_Reference: Array<StaffingTypes.IUniversal_ID_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Request_Criteria_Data: StaffingTypes.IRequest_Criteria_Data;
}

export interface IGet_Change_Legal_NameOutput {
    Request_References: {
        Person_Reference: Array<StaffingTypes.IPerson_Reference>;
        Universal_ID_Reference: Array<StaffingTypes.IUniversal_ID_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Change_Legal_Name: Array<StaffingTypes.IChange_Legal_Name>;
    };
}

export interface ISet_Hiring_RestrictionsInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Set_Hiring_Restrictions_Data: StaffingTypes.ISet_Hiring_Restrictions_Data;
}

export interface ISet_Hiring_RestrictionsOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
    Supervisory_Organization_Reference: StaffingTypes.ISupervisory_Organization_Reference;
}

export interface IEdit_Hiring_RestrictionsInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Edit_Hiring_Restrictions_Data: StaffingTypes.IEdit_Hiring_Restrictions_Data;
}

export interface IEdit_Hiring_RestrictionsOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
    Supervisory_Organization_Reference: StaffingTypes.ISupervisory_Organization_Reference;
}

export interface IPut_Hire_Event_Proposed_Worker_IDInput {
    Event_Reference: StaffingTypes.IEvent_Reference;
    /** urn:com.workday/bsvc#xsd:string(undefined) */
    Worker_ID: string;
}

export interface IPut_Hire_Event_Proposed_Worker_IDOutput {
    Hire_Event_Reference: StaffingTypes.IHire_Event_Reference;
    /** urn:com.workday/bsvc#xsd:string(undefined) */
    Worker_ID: string;
}

export interface IEdit_Worker_Additional_DataInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Worker_Custom_Object_Data: StaffingTypes.IWorker_Custom_Object_Data;
}

export interface IEdit_Worker_Additional_DataOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
    Worker_Reference: StaffingTypes.IWorker_Reference;
    /** urn:com.workday/bsvc#xsd:date(undefined) */
    Effective_Date: date;
    Additional_Data: Array<StaffingTypes.IAdditional_Data>;
}

export interface IEdit_Position_Restrictions_Additional_DataInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Position_Restrictions_Custom_Object_Data: StaffingTypes.IPosition_Restrictions_Custom_Object_Data;
}

export interface IEdit_Position_Restrictions_Additional_DataOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
    Position_Restrictions_Reference: StaffingTypes.IPosition_Restrictions_Reference;
    /** urn:com.workday/bsvc#xsd:date(undefined) */
    Effective_Date: date;
    Additional_Data: Array<StaffingTypes.IAdditional_Data>;
}

export interface IMove_Workers_By_OrganizationInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Move_Workers_By_Organization_Data: StaffingTypes.IMove_Workers_By_Organization_Data;
}

export interface IMove_Workers_By_OrganizationOutput {
    Move_Workers_By_Organization_Reference: StaffingTypes.IMove_Workers_By_Organization_Reference;
}

export interface IChange_Organization_AssignmentsInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Change_Organization_Assignments_Data: StaffingTypes.IChange_Organization_Assignments_Data;
}

export interface IChange_Organization_AssignmentsOutput {
    Change_Organization_Assignments_Event_Reference: StaffingTypes.IChange_Organization_Assignments_Event_Reference;
}

export interface IAssign_RolesInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Assign_Roles_Event_Data: StaffingTypes.IAssign_Roles_Event_Data;
}

export interface IAssign_RolesOutput {
    Assign_Roles_Event_Reference: StaffingTypes.IAssign_Roles_Event_Reference;
}

export interface IPut_Student_Employment_Eligibility_StatusInput {
    Student_Employment_Eligibility_Event_Reference: StaffingTypes.IStudent_Employment_Eligibility_Event_Reference;
    Student_Employment_Eligibility_Event_Data: StaffingTypes.IStudent_Employment_Eligibility_Event_Data;
}

export interface IPut_Student_Employment_Eligibility_StatusOutput {
    Student_Employment_Eligibility_Event_Reference: StaffingTypes.IStudent_Employment_Eligibility_Event_Reference;
}

export interface IGet_Student_Employment_Eligibility_DataInput {
    Request_References: {
        Student_Employment_Eligibility_Event_Reference: Array<StaffingTypes.IStudent_Employment_Eligibility_Event_Reference>;
    };
    Request_Criteria: Array<{}>;
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
    };
}

export interface IGet_Student_Employment_Eligibility_DataOutput {
    Request_References: {
        Student_Employment_Eligibility_Event_Reference: Array<StaffingTypes.IStudent_Employment_Eligibility_Event_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
    };
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Student_Employment_Eligibility_Event: Array<StaffingTypes.IStudent_Employment_Eligibility_Event>;
    };
}

export interface IPut_Notice_Period_Eligibility_RuleInput {
    Notice_Period_Eligibility_Rule_Reference: StaffingTypes.INotice_Period_Eligibility_Rule_Reference;
    Notice_Period_Eligibility_Rule_Data: StaffingTypes.INotice_Period_Eligibility_Rule_Data;
}

export interface IPut_Notice_Period_Eligibility_RuleOutput {
    Notice_Period_Eligibility_Rule_Reference: StaffingTypes.INotice_Period_Eligibility_Rule_Reference;
}

export interface IPut_Maintain_Notice_Periods_for_CountryInput {
    Maintain_Notice_Periods_For_Country_Reference: StaffingTypes.IMaintain_Notice_Periods_For_Country_Reference;
    Maintain_Notice_Periods_For_Country_Data: Array<StaffingTypes.IMaintain_Notice_Periods_For_Country_Data>;
}

export interface IPut_Maintain_Notice_Periods_for_CountryOutput {
    Country_Reference: Array<StaffingTypes.ICountry_Reference>;
    Maintain_Notice_Periods_For_Country_Reference: StaffingTypes.IMaintain_Notice_Periods_For_Country_Reference;
}

export interface IGet_Notice_Period_Eligibility_RulesInput {
    Request_References: {
        Notice_Period_Eligibility_Rule_Reference: Array<StaffingTypes.INotice_Period_Eligibility_Rule_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
}

export interface IGet_Notice_Period_Eligibility_RulesOutput {
    Request_References: {
        Notice_Period_Eligibility_Rule_Reference: Array<StaffingTypes.INotice_Period_Eligibility_Rule_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Notice_Period_Eligibility_Rule: Array<StaffingTypes.INotice_Period_Eligibility_Rule>;
    };
}

export interface IGet_Maintain_Notice_Periods_For_CountryInput {
    Request_References: {
        Maintain_Notice_Periods_For_Country_Reference: Array<StaffingTypes.IMaintain_Notice_Periods_For_Country_Reference>;
    };
    Request_Criteria: {
        Country_Reference: Array<StaffingTypes.ICountry_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
}

export interface IGet_Maintain_Notice_Periods_For_CountryOutput {
    Request_References: {
        Maintain_Notice_Periods_For_Country_Reference: Array<StaffingTypes.IMaintain_Notice_Periods_For_Country_Reference>;
    };
    Request_Criteria: {
        Country_Reference: Array<StaffingTypes.ICountry_Reference>;
    };
    Response_Data: {
        Maintain_Notice_Periods_For_Country: Array<StaffingTypes.IMaintain_Notice_Periods_For_Country>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Results: StaffingTypes.IResponse_Results;
}

export interface IPut_Edit_Notice_Periods_EventInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Put_Edit_Notice_Periods_Event_Data: StaffingTypes.IPut_Edit_Notice_Periods_Event_Data;
}

export interface IPut_Edit_Notice_Periods_EventOutput {
    Edit_Notice_Periods_Event_Reference: StaffingTypes.IEdit_Notice_Periods_Event_Reference;
}

export interface IGet_Notice_PeriodsInput {
    Request_References: {
        Notice_Period_Target_Reference: StaffingTypes.INotice_Period_Target_Reference;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
}

export interface IGet_Notice_PeriodsOutput {
    Request_References: {
        Notice_Period_Target_Reference: StaffingTypes.INotice_Period_Target_Reference;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Notice_Period_Data_for_Notice_Period_Target: Array<StaffingTypes.INotice_Period_Data_for_Notice_Period_Target>;
    };
}

export interface IGet_Maintain_Probation_Periods_For_CountryInput {
    Request_References: {
        Maintain_Probation_Periods_For_Country_Reference: Array<StaffingTypes.IMaintain_Probation_Periods_For_Country_Reference>;
    };
    Request_Criteria: {
        Country_Reference: Array<StaffingTypes.ICountry_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
}

export interface IGet_Maintain_Probation_Periods_For_CountryOutput {
    Request_References: {
        Maintain_Probation_Periods_For_Country_Reference: Array<StaffingTypes.IMaintain_Probation_Periods_For_Country_Reference>;
    };
    Request_Criteria: {
        Country_Reference: Array<StaffingTypes.ICountry_Reference>;
    };
    Response_Data: {
        Maintain_Probation_Periods_For_Country: Array<StaffingTypes.IMaintain_Probation_Periods_For_Country>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Results: StaffingTypes.IResponse_Results;
}

export interface IPut_Maintain_Probation_Periods_For_CountryInput {
    Maintain_Probation_Periods_For_Country_Reference: StaffingTypes.IMaintain_Probation_Periods_For_Country_Reference;
    Maintain_Probation_Periods_For_Country_Data: StaffingTypes.IMaintain_Probation_Periods_For_Country_Data;
}

export interface IPut_Maintain_Probation_Periods_For_CountryOutput {
    Probation_Period_For_Country_Reference: Array<StaffingTypes.IProbation_Period_For_Country_Reference>;
    Exceptions_Response_Data: Array<StaffingTypes.IExceptions_Response_Data>;
}

export interface IPut_Student_Employment_Eligibility_RuleInput {
    Student_Employment_Eligibility_Rule_Reference: StaffingTypes.IStudent_Employment_Eligibility_Rule_Reference;
    Student_Employment_Eligibility_Rule_Data: StaffingTypes.IStudent_Employment_Eligibility_Rule_Data;
}

export interface IPut_Student_Employment_Eligibility_RuleOutput {
    Student_Employment_Eligibility_Rule_Reference: StaffingTypes.IStudent_Employment_Eligibility_Rule_Reference;
}

export interface IGet_Student_Employment_Eligibility_RulesInput {
    Request_References: {
        Student_Employment_Eligibility_Rule_Reference: Array<StaffingTypes.IStudent_Employment_Eligibility_Rule_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
    };
}

export interface IGet_Student_Employment_Eligibility_RulesOutput {
    Request_References: {
        Student_Employment_Eligibility_Rule_Reference: Array<StaffingTypes.IStudent_Employment_Eligibility_Rule_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
    };
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Student_Employment_Eligibility_Rule: Array<StaffingTypes.IStudent_Employment_Eligibility_Rule>;
    };
}

export interface IGet_Probation_Period_Eligibility_RulesInput {
    Request_References: {
        Probation_Period_Eligibility_Rule_Reference: Array<StaffingTypes.IProbation_Period_Eligibility_Rule_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
}

export interface IGet_Probation_Period_Eligibility_RulesOutput {
    Request_References: {
        Probation_Period_Eligibility_Rule_Reference: Array<StaffingTypes.IProbation_Period_Eligibility_Rule_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Probation_Period_Eligibility_Rule: Array<StaffingTypes.IProbation_Period_Eligibility_Rule>;
    };
}

export interface IPut_Probation_Period_Eligibility_RuleInput {
    Probation_Period_Eligibility_Rule_Reference: StaffingTypes.IProbation_Period_Eligibility_Rule_Reference;
    Probation_Period_Eligibility_Rule_Data: StaffingTypes.IProbation_Period_Eligibility_Rule_Data;
}

export interface IPut_Probation_Period_Eligibility_RuleOutput {
    Probation_Period_Eligibility_Rule_Reference: StaffingTypes.IProbation_Period_Eligibility_Rule_Reference;
    Application_Instance_Related_Exceptions_Data: Array<StaffingTypes.IApplication_Instance_Related_Exceptions_Data>;
}

export interface IPut_Student_Employment_Eligibility_Rule_SetInput {
    Student_Employment_Eligibility_Rule_Set_Reference: StaffingTypes.IStudent_Employment_Eligibility_Rule_Set_Reference;
    Student_Employment_Eligibility_Rule_Set_Data: StaffingTypes.IStudent_Employment_Eligibility_Rule_Set_Data;
}

export interface IPut_Student_Employment_Eligibility_Rule_SetOutput {
    Student_Employment_Eligibility_Rule_Set_Reference: StaffingTypes.IStudent_Employment_Eligibility_Rule_Set_Reference;
    Student_Employment_Eligibility_Rule_Set_Data: Array<StaffingTypes.IStudent_Employment_Eligibility_Rule_Set_Data>;
}

export interface IGet_Student_Employment_Eligibility_Rule_SetInput {
    Request_References: {
        Student_Employment_Eligibility_Rule_Set_Request_Reference: Array<StaffingTypes.IStudent_Employment_Eligibility_Rule_Set_Request_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
    };
}

export interface IGet_Student_Employment_Eligibility_Rule_SetOutput {
    Request_Criteria: {
        Student_Employment_Eligibility_Rule_Set_Request_Reference: Array<StaffingTypes.IStudent_Employment_Eligibility_Rule_Set_Request_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
    };
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Student_Employment_Eligibility_Rule_Set: Array<StaffingTypes.IStudent_Employment_Eligibility_Rule_Set>;
    };
}

export interface IChange_Work_SpaceInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Work_Space_Change_Event_Data: StaffingTypes.IWork_Space_Change_Event_Data;
}

export interface IChange_Work_SpaceOutput {
    Work_Space_Change_Event_Reference: StaffingTypes.IWork_Space_Change_Event_Reference;
}

export interface IFreeze_PositionInput {
    Freeze_Position_Data: StaffingTypes.IFreeze_Position_Data;
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
}

export interface IFreeze_PositionOutput {
    Position_Group_Freeze_Event_Reference: StaffingTypes.IPosition_Group_Freeze_Event_Reference;
}

export interface IGet_Probation_Periods_For_WorkersInput {
    Request_References: {
        Workers_Reference: Array<StaffingTypes.IWorkers_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
}

export interface IGet_Probation_Periods_For_WorkersOutput {
    Request_References: {
        Workers_Reference: Array<StaffingTypes.IWorkers_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Probation_Periods_For_Workers: Array<StaffingTypes.IProbation_Periods_For_Workers>;
    };
}

export interface INo_ShowInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    No_Show_Employee_Data: StaffingTypes.INo_Show_Employee_Data;
}

export interface INo_ShowOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
}

export interface IPut_Probation_Period_OutcomesInput {
    Probation_Period_Outcomes_For_Country_Reference: StaffingTypes.IProbation_Period_Outcomes_For_Country_Reference;
    Probation_Period_Outcomes_Data: StaffingTypes.IProbation_Period_Outcomes_Data;
}

export interface IPut_Probation_Period_OutcomesOutput {
    Probation_Period_Outcome_Reference: Array<StaffingTypes.IProbation_Period_Outcome_Reference>;
    Country_Reference: StaffingTypes.ICountry_Reference;
    Probation_Period_Outcomes_For_Country_Reference: StaffingTypes.IProbation_Period_Outcomes_For_Country_Reference;
}

export interface IPut_Assign_Matrix_OrganizationInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Assign_Matrix_Organization_Business_Process_Data: StaffingTypes.IAssign_Matrix_Organization_Business_Process_Data;
}

export interface IPut_Assign_Matrix_OrganizationOutput {
    Matrix_Organization_Event_Reference: StaffingTypes.IMatrix_Organization_Event_Reference;
}

export interface IGet_Probation_Period_OutcomesInput {
    Request_References: {
        Probation_Period_Outcomes_For_Country_Reference: Array<StaffingTypes.IProbation_Period_Outcomes_For_Country_Reference>;
    };
    Request_Criteria: {
        Country_Reference: Array<StaffingTypes.ICountry_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
}

export interface IGet_Probation_Period_OutcomesOutput {
    Request_References: {
        Probation_Period_Outcomes_For_Country_Reference: Array<StaffingTypes.IProbation_Period_Outcomes_For_Country_Reference>;
    };
    Request_Criteria: {
        Country_Reference: Array<StaffingTypes.ICountry_Reference>;
    };
    Response_Data: {
        Probation_Period_Outcomes: Array<StaffingTypes.IProbation_Period_Outcomes>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Results: StaffingTypes.IResponse_Results;
}

export interface IEdit_Employee_Contract_Additional_DataInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Employee_Contract_Custom_Object_Data: Array<StaffingTypes.IEmployee_Contract_Custom_Object_Data>;
}

export interface IEdit_Employee_Contract_Additional_DataOutput {
    Event_Reference: StaffingTypes.IEvent_Reference;
    Employee_Contract_Reference: StaffingTypes.IEmployee_Contract_Reference;
    /** urn:com.workday/bsvc#xsd:date(undefined) */
    Effective_Date: date;
    Additional_Data: Array<StaffingTypes.IAdditional_Data>;
}

export interface IPut_Remove_Matrix_OrganizationInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Remove_Matrix_Organization_Business_Process_Data: StaffingTypes.IRemove_Matrix_Organization_Business_Process_Data;
}

export interface IPut_Remove_Matrix_OrganizationOutput {
    Remove_from_Matrix_Organization_Event_Reference: StaffingTypes.IRemove_from_Matrix_Organization_Event_Reference;
}

export interface IDelete_Worker_DocumentInput {
    Worker_Reference: StaffingTypes.IWorker_Reference;
    Delete_Worker_Data: Array<StaffingTypes.IDelete_Worker_Data>;
}

export interface IDelete_Worker_DocumentOutput {
    Worker_Reference: StaffingTypes.IWorker_Reference;
}

export interface IGet_Role_Assignments_For_Role_AssignersInput {
    Request_References: {
        Role_Assigner_Reference: Array<StaffingTypes.IRole_Assigner_Reference>;
    };
    Request_Criteria: {
        Assignable_Role_Reference: Array<StaffingTypes.IAssignable_Role_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
        Effective_Timezone_Reference: StaffingTypes.IEffective_Timezone_Reference;
    };
}

export interface IGet_Role_Assignments_For_Role_AssignersOutput {
    Request_References: {
        Role_Assigner_Reference: Array<StaffingTypes.IRole_Assigner_Reference>;
    };
    Request_Criteria: {
        Assignable_Role_Reference: Array<StaffingTypes.IAssignable_Role_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Group: {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Reference: boolean;
        Effective_Timezone_Reference: StaffingTypes.IEffective_Timezone_Reference;
    };
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Role_Assigner: Array<StaffingTypes.IRole_Assigner>;
    };
}

export interface IGet_Global_Staffing_Eligibility_RulesInput {
    Request_References: {
        Global_Staffing_Eligibility_Rule_Reference: Array<StaffingTypes.IGlobal_Staffing_Eligibility_Rule_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
}

export interface IGet_Global_Staffing_Eligibility_RulesOutput {
    Request_References: Array<{
        Global_Staffing_Eligibility_Rule_Reference: Array<StaffingTypes.IGlobal_Staffing_Eligibility_Rule_Reference>;
    }>;
    Response_Filter: Array<StaffingTypes.IResponse_Filter>;
    Response_Results: Array<StaffingTypes.IResponse_Results>;
    Response_Data: Array<{
        Global_Staffing_Eligibility_Rule: Array<StaffingTypes.IGlobal_Staffing_Eligibility_Rule>;
    }>;
}

export interface IPut_Global_Staffing_Eligibility_RuleInput {
    Global_Staffing_Eligibility_Rule_Reference: StaffingTypes.IGlobal_Staffing_Eligibility_Rule_Reference;
    Global_Staffing_Eligibility_Rule_Data: StaffingTypes.IGlobal_Staffing_Eligibility_Rule_Data;
}

export interface IPut_Global_Staffing_Eligibility_RuleOutput {
    Global_Staffing_Eligibility_Rule_Reference: StaffingTypes.IGlobal_Staffing_Eligibility_Rule_Reference;
    Application_Instance_Related_Exceptions_Data: Array<StaffingTypes.IApplication_Instance_Related_Exceptions_Data>;
}

export interface IGet_Maintain_Employee_Contract_Rules_For_CountryInput {
    Request_References: {
        Employee_Contracts_For_Country_Reference: Array<StaffingTypes.IEmployee_Contracts_For_Country_Reference>;
    };
    Request_Criteria: {
        Country_Reference: Array<StaffingTypes.ICountry_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
}

export interface IGet_Maintain_Employee_Contract_Rules_For_CountryOutput {
    Request_References: {
        Employee_Contracts_For_Country_Reference: Array<StaffingTypes.IEmployee_Contracts_For_Country_Reference>;
    };
    Request_Criteria: {
        Country_Reference: Array<StaffingTypes.ICountry_Reference>;
    };
    Response_Data: {
        Maintain_Employee_Contract_Rules_For_Country: Array<StaffingTypes.IMaintain_Employee_Contract_Rules_For_Country>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Results: StaffingTypes.IResponse_Results;
}

export interface IPut_Maintain_Employee_Contract_Rules_For_CountryInput {
    Maintain_Employee_Contract_Rules_For_Country_Reference: StaffingTypes.IMaintain_Employee_Contract_Rules_For_Country_Reference;
    Maintain_Employee_Contract_Rules_For_Country_Data: StaffingTypes.IMaintain_Employee_Contract_Rules_For_Country_Data;
}

export interface IPut_Maintain_Employee_Contract_Rules_For_CountryOutput {
    Country_Reference: StaffingTypes.ICountry_Reference;
}

export interface IGet_Notice_Period_Eligibility_Rules_Without_DependenciesInput {
    Request_References: {
        Notice_Period_Eligibility_Rule_Reference: Array<StaffingTypes.INotice_Period_Eligibility_Rule_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
}

export interface IGet_Notice_Period_Eligibility_Rules_Without_DependenciesOutput {
    Request_References: {
        Notice_Period_Eligibility_Rule_Reference: Array<StaffingTypes.INotice_Period_Eligibility_Rule_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Notice_Period_Eligibility_Rule: Array<StaffingTypes.INotice_Period_Eligibility_Rule>;
    };
}

export interface IGet_Probation_Period_Eligibility_Rules_Without_DependenciesInput {
    Request_References: {
        Probation_Period_Eligibility_Rule_Reference: Array<StaffingTypes.IProbation_Period_Eligibility_Rule_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
}

export interface IGet_Probation_Period_Eligibility_Rules_Without_DependenciesOutput {
    Request_References: Array<{
        Probation_Period_Eligibility_Rule_Reference: Array<StaffingTypes.IProbation_Period_Eligibility_Rule_Reference>;
    }>;
    Response_Filter: Array<StaffingTypes.IResponse_Filter>;
    Response_Results: Array<StaffingTypes.IResponse_Results>;
    Response_Data: Array<{
        Probation_Period_Eligibility_Rule: Array<StaffingTypes.IProbation_Period_Eligibility_Rule>;
    }>;
}

export interface IGet_Global_Staffing_Eligibility_Rules_Without_DependenciesInput {
    Request_References: {
        Global_Staffing_Eligibility_Rule_Reference: Array<StaffingTypes.IGlobal_Staffing_Eligibility_Rule_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
}

export interface IGet_Global_Staffing_Eligibility_Rules_Without_DependenciesOutput {
    Request_References: {
        Global_Staffing_Eligibility_Rule_Reference: Array<StaffingTypes.IGlobal_Staffing_Eligibility_Rule_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        Global_Staffing_Eligibility_Rule: Array<StaffingTypes.IGlobal_Staffing_Eligibility_Rule>;
    };
}

export interface IGet_Probation_Period_OutcomeInput {
    Request_References: {
        Probation_Period_Outcome_Reference: Array<StaffingTypes.IProbation_Period_Outcome_Reference>;
    };
    Request_Critera: StaffingTypes.IRequest_Critera;
    Response_Filter: StaffingTypes.IResponse_Filter;
}

export interface IGet_Probation_Period_OutcomeOutput {
    Request_References: {
        Probation_Period_Outcome_Reference: Array<StaffingTypes.IProbation_Period_Outcome_Reference>;
    };
    Request_Criteria: {};
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Data: {
        Probation_Period_Outcome: Array<StaffingTypes.IProbation_Period_Outcome>;
    };
    Response_Results: StaffingTypes.IResponse_Results;
}

export interface IPut_Probation_Period_OutcomeInput {
    /** urn:com.workday/bsvc#xsd:boolean(undefined) */
    Add_Only: boolean;
    Probation_Period_Outcome_Reference: StaffingTypes.IProbation_Period_Outcome_Reference;
    Probation_Period_Outcome_Data: {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Probation_Period_Outcome_Name: string;
        Probation_Period_Action_Reference: Array<StaffingTypes.IProbation_Period_Action_Reference>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Inactive: boolean;
        Country_Reference: StaffingTypes.ICountry_Reference;
    };
}

export interface IPut_Probation_Period_OutcomeOutput {
    Probation_Period_Outcome_Reference: StaffingTypes.IProbation_Period_Outcome_Reference;
}

export interface IPut_FSE_Worker_Category_CriteriaInput {
    FSE_Worker_Category_Criteria_Data: StaffingTypes.IFSE_Worker_Category_Criteria_Data;
}

export interface IPut_FSE_Worker_Category_CriteriaOutput {
    FSE_Worker_Category_Criteria_Reference: StaffingTypes.IFSE_Worker_Category_Criteria_Reference;
}

export interface IGet_FSE_Worker_Category_CriteriasInput {
    Request_References: {
        FSE_Worker_Category_Criteria_Reference: Array<StaffingTypes.IFSE_Worker_Category_Criteria_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
}

export interface IGet_FSE_Worker_Category_CriteriasOutput {
    Request_References: {
        FSE_Worker_Category_Criteria_Reference: Array<StaffingTypes.IFSE_Worker_Category_Criteria_Reference>;
    };
    Response_Filter: StaffingTypes.IResponse_Filter;
    Response_Results: StaffingTypes.IResponse_Results;
    Response_Data: {
        FSE_Worker_Category_Criteria: Array<StaffingTypes.IFSE_Worker_Category_Criteria>;
    };
}

export interface IImport_External_Student_InformationInput {
    /** urn:com.workday/bsvc#xsd:string(undefined) */
    ID: string;
    External_Student_Data: Array<StaffingTypes.IExternal_Student_Data>;
}

export interface IImport_External_Student_InformationOutput {
    Import_Process_Reference: StaffingTypes.IImport_Process_Reference;
    Header_Instance_Reference: StaffingTypes.IHeader_Instance_Reference;
}

export interface IImport_Hire_EmployeeInput {
    /** urn:com.workday/bsvc#xsd:string(undefined) */
    ID: string;
    Hire_Employee_Information_HV: Array<StaffingTypes.IHire_Employee_Information_HV>;
}

export interface IImport_Hire_EmployeeOutput {
    Import_Process_Reference: StaffingTypes.IImport_Process_Reference;
    Header_Instance_Reference: StaffingTypes.IHeader_Instance_Reference;
}

export interface IImport_Contract_Contingent_WorkerInput {
    /** urn:com.workday/bsvc#xsd:string(undefined) */
    ID: string;
    Contract_Contingent_Worker_Information_HV: Array<StaffingTypes.IContract_Contingent_Worker_Information_HV>;
}

export interface IImport_Contract_Contingent_WorkerOutput {
    Import_Process_Reference: StaffingTypes.IImport_Process_Reference;
    Header_Instance_Reference: StaffingTypes.IHeader_Instance_Reference;
}

export interface IImport_ApplicantInput {
    /** urn:com.workday/bsvc#xsd:string(undefined) */
    ID: string;
    Applicant: Array<{
        Applicant_Reference: StaffingTypes.IApplicant_Reference;
        Applicant_Data: Array<{
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Applicant_ID: string;
            Personal_Data: StaffingTypes.IPersonal_Data;
            Qualification_Data: {
                External_Job_History: Array<StaffingTypes.IExternal_Job_History>;
                Competency: StaffingTypes.ICompetency[];
                Certification: StaffingTypes.ICertification[];
                Training: StaffingTypes.ITraining[];
                Award_and_Activity: Array<StaffingTypes.IAward_and_Activity>;
                Organization_Membership: Array<StaffingTypes.IOrganization_Membership>;
                Education: StaffingTypes.IEducation[];
                Work_Experience: Array<StaffingTypes.IWork_Experience>;
                Language: StaffingTypes.ILanguage[];
                Internal_Project_Experience: Array<StaffingTypes.IInternal_Project_Experience>;
            };
            Recruiting_Data: StaffingTypes.IRecruiting_Data;
            Resume_Data: {
                Resume: StaffingTypes.IResume[];
            };
            Background_Check_Data: Array<StaffingTypes.IBackground_Check_Data>;
            External_Integration_ID_Data: StaffingTypes.IExternal_Integration_ID_Data;
            Document_Field_Result_Data: Array<StaffingTypes.IDocument_Field_Result_Data>;
        }>;
    }>;
}

export interface IImport_ApplicantOutput {
    Import_Process_Reference: StaffingTypes.IImport_Process_Reference;
    Header_Instance_Reference: StaffingTypes.IHeader_Instance_Reference;
}

export interface IImport_Swap_PositionsInput {
    Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
    Mass_Swap_Positions_Data: StaffingTypes.IMass_Swap_Positions_Data;
}

export interface IImport_Swap_PositionsOutput {
    Import_Process_Reference: StaffingTypes.IImport_Process_Reference;
    Header_Instance_Reference: StaffingTypes.IHeader_Instance_Reference;
}

export interface IImport_Terminate_EmployeeInput {
    /** urn:com.workday/bsvc#xsd:string(undefined) */
    ID: string;
    Terminate_Employee_Information_HV: Array<StaffingTypes.ITerminate_Employee_Information_HV>;
}

export interface IImport_Terminate_EmployeeOutput {
    Import_Process_Reference: StaffingTypes.IImport_Process_Reference;
    Header_Instance_Reference: StaffingTypes.IHeader_Instance_Reference;
}

export interface IImport_End_Contingent_Worker_ContractInput {
    /** urn:com.workday/bsvc#xsd:string(undefined) */
    ID: string;
    End_Contingent_Worker_Contract_Information_HV: Array<StaffingTypes.IEnd_Contingent_Worker_Contract_Information_HV>;
}

export interface IImport_End_Contingent_Worker_ContractOutput {
    Import_Process_Reference: StaffingTypes.IImport_Process_Reference;
    Header_Instance_Reference: StaffingTypes.IHeader_Instance_Reference;
}

export interface IImport_Change_JobInput {
    /** urn:com.workday/bsvc#xsd:string(undefined) */
    ID: string;
    Change_Job_Information_HV: Array<StaffingTypes.IChange_Job_Information_HV>;
}

export interface IImport_Change_JobOutput {
    Import_Process_Reference: StaffingTypes.IImport_Process_Reference;
    Header_Instance_Reference: StaffingTypes.IHeader_Instance_Reference;
}

export interface IImport_Assign_Matrix_OrganizationInput {
    /** urn:com.workday/bsvc#xsd:string(undefined) */
    ID: string;
    Assign_Matrix_Organization_Information_HV: Array<StaffingTypes.IAssign_Matrix_Organization_Information_HV>;
}

export interface IImport_Assign_Matrix_OrganizationOutput {
    Import_Process_Reference: StaffingTypes.IImport_Process_Reference;
    Header_Instance_Reference: StaffingTypes.IHeader_Instance_Reference;
}

export interface IImport_Remove_Matrix_OrganizationInput {
    /** urn:com.workday/bsvc#xsd:string(undefined) */
    ID: string;
    Remove_Matrix_Organization_Information_HV: Array<StaffingTypes.IRemove_Matrix_Organization_Information_HV>;
}

export interface IImport_Remove_Matrix_OrganizationOutput {
    Import_Process_Reference: StaffingTypes.IImport_Process_Reference;
    Header_Instance_Reference: StaffingTypes.IHeader_Instance_Reference;
}

export interface IImport_Change_Organization_AssignmentInput {
    /** urn:com.workday/bsvc#xsd:string(undefined) */
    ID: string;
    Change_Organizaton_Assignments_HV: Array<StaffingTypes.IChange_Organizaton_Assignments_HV>;
}

export interface IImport_Change_Organization_AssignmentOutput {
    Import_Process_Reference: StaffingTypes.IImport_Process_Reference;
    Header_Instance_Reference: StaffingTypes.IHeader_Instance_Reference;
}

export interface IImport_Move_Workers_By_OrganizationInput {
    /** urn:com.workday/bsvc#xsd:string(undefined) */
    ID: string;
    Move_Workers_By_Organization_HV: Array<StaffingTypes.IMove_Workers_By_Organization_HV>;
}

export interface IImport_Move_Workers_By_OrganizationOutput {
    Import_Process_Reference: StaffingTypes.IImport_Process_Reference;
    Header_Instance_Reference: StaffingTypes.IHeader_Instance_Reference;
}

export interface IStaffingSoap {
    AddOnly_Employee: (input: IAddOnly_EmployeeInput, cb: (err: any | null, result: IAddOnly_EmployeeOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Terminate_Employee: (input: ITerminate_EmployeeInput, cb: (err: any | null, result: ITerminate_EmployeeOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Workers: (input: IGet_WorkersInput, cb: (err: any | null, result: IGet_WorkersOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Edit_Position: (input: IEdit_PositionInput, cb: (err: any | null, result: IEdit_PositionOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Hire_Employee: (input: IHire_EmployeeInput, cb: (err: any | null, result: IHire_EmployeeOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Applicants: (input: IGet_ApplicantsInput, cb: (err: any | null, result: IGet_ApplicantsOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Assign_Organization: (input: IAssign_OrganizationInput, cb: (err: any | null, result: IAssign_OrganizationOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Applicant: (input: IPut_ApplicantInput, cb: (err: any | null, result: IPut_ApplicantOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    End_Contingent_Worker_Contract: (input: IEnd_Contingent_Worker_ContractInput, cb: (err: any | null, result: IEnd_Contingent_Worker_ContractOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Contract_Contingent_Worker: (input: IContract_Contingent_WorkerInput, cb: (err: any | null, result: IContract_Contingent_WorkerOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Dependent: (input: IPut_DependentInput, cb: (err: any | null, result: IPut_DependentOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Create_Position: (input: ICreate_PositionInput, cb: (err: any | null, result: ICreate_PositionOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Positions: (input: IGet_PositionsInput, cb: (err: any | null, result: IGet_PositionsOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Edit_Service_Dates: (input: IEdit_Service_DatesInput, cb: (err: any | null, result: IEdit_Service_DatesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Organizations: (input: IGet_OrganizationsInput, cb: (err: any | null, result: IGet_OrganizationsOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    End_Additional_Job: (input: IEnd_Additional_JobInput, cb: (err: any | null, result: IEnd_Additional_JobOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Add_Additional_Job: (input: IAdd_Additional_JobInput, cb: (err: any | null, result: IAdd_Additional_JobOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Add_Retiree_Status: (input: IAdd_Retiree_StatusInput, cb: (err: any | null, result: IAdd_Retiree_StatusOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Remove_Retiree_Status: (input: IRemove_Retiree_StatusInput, cb: (err: any | null, result: IRemove_Retiree_StatusOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Maintain_Employee_Contracts: (input: IMaintain_Employee_ContractsInput, cb: (err: any | null, result: IMaintain_Employee_ContractsOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Citizenship_Statuses: (input: IGet_Citizenship_StatusesInput, cb: (err: any | null, result: IGet_Citizenship_StatusesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Citizenship_Status: (input: IPut_Citizenship_StatusInput, cb: (err: any | null, result: IPut_Citizenship_StatusOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Edit_Position_Restrictions: (input: IEdit_Position_RestrictionsInput, cb: (err: any | null, result: IEdit_Position_RestrictionsOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Job_Classification_Groups: (input: IGet_Job_Classification_GroupsInput, cb: (err: any | null, result: IGet_Job_Classification_GroupsOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Job_Classification_Group: (input: IPut_Job_Classification_GroupInput, cb: (err: any | null, result: IPut_Job_Classification_GroupOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Job_Families: (input: IGet_Job_FamiliesInput, cb: (err: any | null, result: IGet_Job_FamiliesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Job_Family: (input: IPut_Job_FamilyInput, cb: (err: any | null, result: IPut_Job_FamilyOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Job_Family_Groups: (input: IGet_Job_Family_GroupsInput, cb: (err: any | null, result: IGet_Job_Family_GroupsOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Job_Family_Group: (input: IPut_Job_Family_GroupInput, cb: (err: any | null, result: IPut_Job_Family_GroupOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Start_International_Assignment: (input: IStart_International_AssignmentInput, cb: (err: any | null, result: IStart_International_AssignmentOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    End_International_Assignment: (input: IEnd_International_AssignmentInput, cb: (err: any | null, result: IEnd_International_AssignmentOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Assign_Organization_Roles: (input: IAssign_Organization_RolesInput, cb: (err: any | null, result: IAssign_Organization_RolesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Worker_Document: (input: IPut_Worker_DocumentInput, cb: (err: any | null, result: IPut_Worker_DocumentOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Worker_Documents: (input: IGet_Worker_DocumentsInput, cb: (err: any | null, result: IGet_Worker_DocumentsOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Change_Job: (input: IChange_JobInput, cb: (err: any | null, result: IChange_JobOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Switch_Primary_Job: (input: ISwitch_Primary_JobInput, cb: (err: any | null, result: ISwitch_Primary_JobOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Close_Position: (input: IClose_PositionInput, cb: (err: any | null, result: IClose_PositionOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Collective_Agreements: (input: IGet_Collective_AgreementsInput, cb: (err: any | null, result: IGet_Collective_AgreementsOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Collective_Agreement: (input: IPut_Collective_AgreementInput, cb: (err: any | null, result: IPut_Collective_AgreementOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Change_Personal_Information: (input: IChange_Personal_InformationInput, cb: (err: any | null, result: IChange_Personal_InformationOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Change_Personal_Information: (input: IGet_Change_Personal_InformationInput, cb: (err: any | null, result: IGet_Change_Personal_InformationOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Change_Government_IDs: (input: IGet_Change_Government_IDsInput, cb: (err: any | null, result: IGet_Change_Government_IDsOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Change_Passports_and_Visas: (input: IGet_Change_Passports_and_VisasInput, cb: (err: any | null, result: IGet_Change_Passports_and_VisasOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Change_Licenses: (input: IGet_Change_LicensesInput, cb: (err: any | null, result: IGet_Change_LicensesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Change_Other_IDs: (input: IGet_Change_Other_IDsInput, cb: (err: any | null, result: IGet_Change_Other_IDsOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Change_Preferred_Name: (input: IGet_Change_Preferred_NameInput, cb: (err: any | null, result: IGet_Change_Preferred_NameOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Change_Legal_Name: (input: IGet_Change_Legal_NameInput, cb: (err: any | null, result: IGet_Change_Legal_NameOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Set_Hiring_Restrictions: (input: ISet_Hiring_RestrictionsInput, cb: (err: any | null, result: ISet_Hiring_RestrictionsOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Edit_Hiring_Restrictions: (input: IEdit_Hiring_RestrictionsInput, cb: (err: any | null, result: IEdit_Hiring_RestrictionsOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Hire_Event_Proposed_Worker_ID: (input: IPut_Hire_Event_Proposed_Worker_IDInput, cb: (err: any | null, result: IPut_Hire_Event_Proposed_Worker_IDOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Edit_Worker_Additional_Data: (input: IEdit_Worker_Additional_DataInput, cb: (err: any | null, result: IEdit_Worker_Additional_DataOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Edit_Position_Restrictions_Additional_Data: (input: IEdit_Position_Restrictions_Additional_DataInput, cb: (err: any | null, result: IEdit_Position_Restrictions_Additional_DataOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Move_Workers_By_Organization: (input: IMove_Workers_By_OrganizationInput, cb: (err: any | null, result: IMove_Workers_By_OrganizationOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Change_Organization_Assignments: (input: IChange_Organization_AssignmentsInput, cb: (err: any | null, result: IChange_Organization_AssignmentsOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Assign_Roles: (input: IAssign_RolesInput, cb: (err: any | null, result: IAssign_RolesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Student_Employment_Eligibility_Status: (input: IPut_Student_Employment_Eligibility_StatusInput, cb: (err: any | null, result: IPut_Student_Employment_Eligibility_StatusOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Student_Employment_Eligibility_Data: (input: IGet_Student_Employment_Eligibility_DataInput, cb: (err: any | null, result: IGet_Student_Employment_Eligibility_DataOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Notice_Period_Eligibility_Rule: (input: IPut_Notice_Period_Eligibility_RuleInput, cb: (err: any | null, result: IPut_Notice_Period_Eligibility_RuleOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Maintain_Notice_Periods_for_Country: (input: IPut_Maintain_Notice_Periods_for_CountryInput, cb: (err: any | null, result: IPut_Maintain_Notice_Periods_for_CountryOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Notice_Period_Eligibility_Rules: (input: IGet_Notice_Period_Eligibility_RulesInput, cb: (err: any | null, result: IGet_Notice_Period_Eligibility_RulesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Maintain_Notice_Periods_For_Country: (input: IGet_Maintain_Notice_Periods_For_CountryInput, cb: (err: any | null, result: IGet_Maintain_Notice_Periods_For_CountryOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Edit_Notice_Periods_Event: (input: IPut_Edit_Notice_Periods_EventInput, cb: (err: any | null, result: IPut_Edit_Notice_Periods_EventOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Notice_Periods: (input: IGet_Notice_PeriodsInput, cb: (err: any | null, result: IGet_Notice_PeriodsOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Maintain_Probation_Periods_For_Country: (input: IGet_Maintain_Probation_Periods_For_CountryInput, cb: (err: any | null, result: IGet_Maintain_Probation_Periods_For_CountryOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Maintain_Probation_Periods_For_Country: (input: IPut_Maintain_Probation_Periods_For_CountryInput, cb: (err: any | null, result: IPut_Maintain_Probation_Periods_For_CountryOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Student_Employment_Eligibility_Rule: (input: IPut_Student_Employment_Eligibility_RuleInput, cb: (err: any | null, result: IPut_Student_Employment_Eligibility_RuleOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Student_Employment_Eligibility_Rules: (input: IGet_Student_Employment_Eligibility_RulesInput, cb: (err: any | null, result: IGet_Student_Employment_Eligibility_RulesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Probation_Period_Eligibility_Rules: (input: IGet_Probation_Period_Eligibility_RulesInput, cb: (err: any | null, result: IGet_Probation_Period_Eligibility_RulesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Probation_Period_Eligibility_Rule: (input: IPut_Probation_Period_Eligibility_RuleInput, cb: (err: any | null, result: IPut_Probation_Period_Eligibility_RuleOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Student_Employment_Eligibility_Rule_Set: (input: IPut_Student_Employment_Eligibility_Rule_SetInput, cb: (err: any | null, result: IPut_Student_Employment_Eligibility_Rule_SetOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Student_Employment_Eligibility_Rule_Set: (input: IGet_Student_Employment_Eligibility_Rule_SetInput, cb: (err: any | null, result: IGet_Student_Employment_Eligibility_Rule_SetOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Change_Work_Space: (input: IChange_Work_SpaceInput, cb: (err: any | null, result: IChange_Work_SpaceOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Freeze_Position: (input: IFreeze_PositionInput, cb: (err: any | null, result: IFreeze_PositionOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Probation_Periods_For_Workers: (input: IGet_Probation_Periods_For_WorkersInput, cb: (err: any | null, result: IGet_Probation_Periods_For_WorkersOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    No_Show: (input: INo_ShowInput, cb: (err: any | null, result: INo_ShowOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Probation_Period_Outcomes: (input: IPut_Probation_Period_OutcomesInput, cb: (err: any | null, result: IPut_Probation_Period_OutcomesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Assign_Matrix_Organization: (input: IPut_Assign_Matrix_OrganizationInput, cb: (err: any | null, result: IPut_Assign_Matrix_OrganizationOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Probation_Period_Outcomes: (input: IGet_Probation_Period_OutcomesInput, cb: (err: any | null, result: IGet_Probation_Period_OutcomesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Edit_Employee_Contract_Additional_Data: (input: IEdit_Employee_Contract_Additional_DataInput, cb: (err: any | null, result: IEdit_Employee_Contract_Additional_DataOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Remove_Matrix_Organization: (input: IPut_Remove_Matrix_OrganizationInput, cb: (err: any | null, result: IPut_Remove_Matrix_OrganizationOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Delete_Worker_Document: (input: IDelete_Worker_DocumentInput, cb: (err: any | null, result: IDelete_Worker_DocumentOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Role_Assignments_For_Role_Assigners: (input: IGet_Role_Assignments_For_Role_AssignersInput, cb: (err: any | null, result: IGet_Role_Assignments_For_Role_AssignersOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Global_Staffing_Eligibility_Rules: (input: IGet_Global_Staffing_Eligibility_RulesInput, cb: (err: any | null, result: IGet_Global_Staffing_Eligibility_RulesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Global_Staffing_Eligibility_Rule: (input: IPut_Global_Staffing_Eligibility_RuleInput, cb: (err: any | null, result: IPut_Global_Staffing_Eligibility_RuleOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Maintain_Employee_Contract_Rules_For_Country: (input: IGet_Maintain_Employee_Contract_Rules_For_CountryInput, cb: (err: any | null, result: IGet_Maintain_Employee_Contract_Rules_For_CountryOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Maintain_Employee_Contract_Rules_For_Country: (input: IPut_Maintain_Employee_Contract_Rules_For_CountryInput, cb: (err: any | null, result: IPut_Maintain_Employee_Contract_Rules_For_CountryOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Notice_Period_Eligibility_Rules_Without_Dependencies: (input: IGet_Notice_Period_Eligibility_Rules_Without_DependenciesInput, cb: (err: any | null, result: IGet_Notice_Period_Eligibility_Rules_Without_DependenciesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Probation_Period_Eligibility_Rules_Without_Dependencies: (input: IGet_Probation_Period_Eligibility_Rules_Without_DependenciesInput, cb: (err: any | null, result: IGet_Probation_Period_Eligibility_Rules_Without_DependenciesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Global_Staffing_Eligibility_Rules_Without_Dependencies: (input: IGet_Global_Staffing_Eligibility_Rules_Without_DependenciesInput, cb: (err: any | null, result: IGet_Global_Staffing_Eligibility_Rules_Without_DependenciesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_Probation_Period_Outcome: (input: IGet_Probation_Period_OutcomeInput, cb: (err: any | null, result: IGet_Probation_Period_OutcomeOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_Probation_Period_Outcome: (input: IPut_Probation_Period_OutcomeInput, cb: (err: any | null, result: IPut_Probation_Period_OutcomeOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Put_FSE_Worker_Category_Criteria: (input: IPut_FSE_Worker_Category_CriteriaInput, cb: (err: any | null, result: IPut_FSE_Worker_Category_CriteriaOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Get_FSE_Worker_Category_Criterias: (input: IGet_FSE_Worker_Category_CriteriasInput, cb: (err: any | null, result: IGet_FSE_Worker_Category_CriteriasOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Import_External_Student_Information: (input: IImport_External_Student_InformationInput, cb: (err: any | null, result: IImport_External_Student_InformationOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Import_Hire_Employee: (input: IImport_Hire_EmployeeInput, cb: (err: any | null, result: IImport_Hire_EmployeeOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Import_Contract_Contingent_Worker: (input: IImport_Contract_Contingent_WorkerInput, cb: (err: any | null, result: IImport_Contract_Contingent_WorkerOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Import_Applicant: (input: IImport_ApplicantInput, cb: (err: any | null, result: IImport_ApplicantOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Import_Swap_Positions: (input: IImport_Swap_PositionsInput, cb: (err: any | null, result: IImport_Swap_PositionsOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Import_Terminate_Employee: (input: IImport_Terminate_EmployeeInput, cb: (err: any | null, result: IImport_Terminate_EmployeeOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Import_End_Contingent_Worker_Contract: (input: IImport_End_Contingent_Worker_ContractInput, cb: (err: any | null, result: IImport_End_Contingent_Worker_ContractOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Import_Change_Job: (input: IImport_Change_JobInput, cb: (err: any | null, result: IImport_Change_JobOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Import_Assign_Matrix_Organization: (input: IImport_Assign_Matrix_OrganizationInput, cb: (err: any | null, result: IImport_Assign_Matrix_OrganizationOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Import_Remove_Matrix_Organization: (input: IImport_Remove_Matrix_OrganizationInput, cb: (err: any | null, result: IImport_Remove_Matrix_OrganizationOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Import_Change_Organization_Assignment: (input: IImport_Change_Organization_AssignmentInput, cb: (err: any | null, result: IImport_Change_Organization_AssignmentOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    Import_Move_Workers_By_Organization: (input: IImport_Move_Workers_By_OrganizationInput, cb: (err: any | null, result: IImport_Move_Workers_By_OrganizationOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
}

export namespace StaffingTypes {
    export interface IApplicant_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IFormer_Worker_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEmployee_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IHire_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IOrganization_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPosition_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IJob_Profile_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILocation_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWork_Space_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPosition_Time_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWork_Shift_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWork_Hours_Profile_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWorking_Time_Frequency_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWorking_Time_Unit_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPay_Rate_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IJob_Classification_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICompany_Insider_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAnnual_Work_Period_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDisbursement_Plan_Period_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWork_Study_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWorkers__Compensation_Code_Override_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IExternal_ID {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        External_ID: string;
    }
    export interface IPosition_External_ID_Data {
        External_ID: Array<StaffingTypes.IExternal_ID>;
    }
    export interface IPosition_for_Worker_Staffing_Event_Data {
        Organization_Reference: StaffingTypes.IOrganization_Reference;
        Position_Reference: StaffingTypes.IPosition_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Position_ID: string;
        Job_Profile_Reference: StaffingTypes.IJob_Profile_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Position_Title: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Business_Title: string;
        Location_Reference: StaffingTypes.ILocation_Reference;
        Work_Space_Reference: StaffingTypes.IWork_Space_Reference;
        Position_Time_Type_Reference: StaffingTypes.IPosition_Time_Type_Reference;
        Work_Shift_Reference: StaffingTypes.IWork_Shift_Reference;
        Work_Hours_Profile_Reference: StaffingTypes.IWork_Hours_Profile_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Default_Weekly_Hours: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Scheduled_Weekly_Hours: totalDigits,fractionDigits;
        Working_Time_Frequency_Reference: StaffingTypes.IWorking_Time_Frequency_Reference;
        Working_Time_Unit_Reference: StaffingTypes.IWorking_Time_Unit_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Working_Time_Value: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Specify_Paid_FTE: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Paid_FTE: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Specify_Working_FTE: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Working_FTE: totalDigits,minInclusive,fractionDigits;
        Pay_Rate_Type_Reference: StaffingTypes.IPay_Rate_Type_Reference;
        Job_Classification_Reference: Array<StaffingTypes.IJob_Classification_Reference>;
        Company_Insider_Type_Reference: Array<StaffingTypes.ICompany_Insider_Type_Reference>;
        Annual_Work_Period_Reference: StaffingTypes.IAnnual_Work_Period_Reference;
        Disbursement_Plan_Period_Reference: StaffingTypes.IDisbursement_Plan_Period_Reference;
        Work_Study_Reference: StaffingTypes.IWork_Study_Reference;
        Workers__Compensation_Code_Override_Reference: StaffingTypes.IWorkers__Compensation_Code_Override_Reference;
        Position_External_ID_Data: StaffingTypes.IPosition_External_ID_Data;
    }
    export interface ICompensation_Element_Values_for_Base_Pay_Data {
        Compensation_Element_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Compensation_Element_Name: string;
        };
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Compensation_Element_Amount: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#CurrencyEnumeration(annotation) */
            Currency_Code: "annotation";
        };
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Frequency_Name: string;
        };
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expected_End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Actual_End_Date: date;
    }
    export interface ISalary_Plan_for_Compensation_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Salary_Plan_Name: string;
        Compensation_Element_Values_for_Base_Pay_Data: StaffingTypes.ICompensation_Element_Values_for_Base_Pay_Data;
    }
    export interface IHourly_Plan_for_Compensation_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Hourly_Plan_Name: string;
        Compensation_Element_Values_for_Base_Pay_Data: StaffingTypes.ICompensation_Element_Values_for_Base_Pay_Data;
    }
    export interface ICompensation_Element_Values_for_Unit_Salary_Plan_Data {
        Compensation_Element_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Compensation_Element_Name: string;
        };
        Unit_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Unit_of_Measure_Name: string;
        };
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Per_Unit_Amount: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#CurrencyEnumeration(annotation) */
            Currency_Code: "annotation";
        };
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Number_of_Units: totalDigits,minInclusive,fractionDigits;
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Frequency_Name: string;
        };
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Actual_End_Date: date;
    }
    export interface IUnit_Salary_Plan_for_Compensation_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Unit_Salary_Plan_Name: string;
        Compensation_Element_Values_for_Unit_Salary_Plan_Data: StaffingTypes.ICompensation_Element_Values_for_Unit_Salary_Plan_Data;
    }
    export interface ICompensation_Element_Values_for_Allowance_Plan_Data {
        Compensation_Element_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Compensation_Element_Name: string;
        };
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Percent: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Amount: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#CurrencyEnumeration(annotation) */
            Currency_Code: "annotation";
        };
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Frequency_Name: string;
        };
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expected_End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Reimbursement_Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Actual_End_Date: date;
    }
    export interface IAllowance_Plan_for_Compensation_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Allowance_Plan_Name: string;
        Compensation_Element_Values_for_Allowance_Plan_Data: StaffingTypes.ICompensation_Element_Values_for_Allowance_Plan_Data;
    }
    export interface ICompensation_Element_Values_for_Unit_Allowance_Plan_Data {
        Compensation_Element_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Compensation_Element_Name: string;
        };
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Number_of_Units: totalDigits,minInclusive,fractionDigits;
        Unit_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Unit_of_Measure_Name: string;
        };
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Frequency_Name: string;
        };
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Per_Unit_Amount: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#CurrencyEnumeration(annotation) */
            Currency_Code: "annotation";
        };
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Reimbursement_Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Actual_End_Date: date;
    }
    export interface IUnit_Allowance_Plan_for_Compensation_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Allowance_Plan_Name: string;
        Compensation_Element_Values_for_Unit_Allowance_Plan_Data: StaffingTypes.ICompensation_Element_Values_for_Unit_Allowance_Plan_Data;
    }
    export interface ICompensation_Element_Values_for_Bonus_Plan_Data {
        Compensation_Element_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Compensation_Element_Name: string;
        };
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Amount: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Percentage: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Guaranteed_Minimum: boolean;
        Currency_Reference: {
            /** urn:com.workday/bsvc#CurrencyEnumeration(annotation) */
            Currency_Code: "annotation";
        };
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Frequency_Name: string;
        };
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Percentage_Assigned: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Actual_End_Date: date;
    }
    export interface IBonus_Plan_for_Compensation_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Bonus_Plan_Name: string;
        Compensation_Element_Values_for_Bonus_Plan_Data: StaffingTypes.ICompensation_Element_Values_for_Bonus_Plan_Data;
    }
    export interface ICompensation_Element_Values_for_Merit_Plan_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Individual_Target: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Guaranteed_Minimum: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Actual_End_Date: date;
    }
    export interface IMerit_Plan_for_Compensation_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Merit_Plan_Name: string;
        Compensation_Element_Values_for_Merit_Plan_Data: StaffingTypes.ICompensation_Element_Values_for_Merit_Plan_Data;
    }
    export interface ICompensation_Element_Values_for_Commission_Plan_Data {
        Compensation_Element_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Compensation_Element_Name: string;
        };
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Target_Amount: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#CurrencyEnumeration(annotation) */
            Currency_Code: "annotation";
        };
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Frequency_Name: string;
        };
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Draw_Amount: totalDigits,minInclusive,fractionDigits;
        Draw_Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Frequency_Name: string;
        };
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Draw_Duration: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Recoverable: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Actual_End_Date: date;
    }
    export interface ICommission_Plan_for_Compensation_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Commission_Plan_Name: string;
        Compensation_Element_Values_for_Commission_Plan_Data: StaffingTypes.ICompensation_Element_Values_for_Commission_Plan_Data;
    }
    export interface IStock_Plan_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICompensation_Element_Values_for_Stock_Plan_Data {
        Stock_Plan_Reference: StaffingTypes.IStock_Plan_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Individual_Target_Shares: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Individual_Target_Percent: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Individual_Target_Amount: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Actual_End_Date: date;
    }
    export interface IStock_Plan_for_Compensation_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Stock_Plan_Name: string;
        Compensation_Element_Values_for_Stock_Plan_Data: StaffingTypes.ICompensation_Element_Values_for_Stock_Plan_Data;
    }
    export interface ICompensation_Period_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICompensation_Element_Values_for_Period_Salary_Plan_Data {
        Compensation_Element_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Compensation_Element_Name: string;
        };
        Compensation_Period_Reference: StaffingTypes.ICompensation_Period_Reference;
        Currency_Reference: {
            /** urn:com.workday/bsvc#CurrencyEnumeration(annotation) */
            Currency_Code: "annotation";
        };
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Compensation_Multiplier: totalDigits,minInclusive,fractionDigits;
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Frequency_Name: string;
        };
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Actual_End_Date: date;
    }
    export interface IPeriod_Salary_Plan_for_Compensation_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Period_Salary_Plan_Name: string;
        Compensation_Element_Values_for_Period_Salary_Plan_Data: StaffingTypes.ICompensation_Element_Values_for_Period_Salary_Plan_Data;
    }
    export interface ICompensation_Element_Values_for_Calculated_Plan_Data {
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Actual_End_Date: date;
    }
    export interface ICalculated_Plan_for_Compensation_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Calculated_Plan_Name: string;
        Compensation_Element_Values_for_Calculated_Plan_Data: StaffingTypes.ICompensation_Element_Values_for_Calculated_Plan_Data;
    }
    export interface ICompensation_Detail_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Primary_Compensation_Basis: totalDigits,fractionDigits;
        Compensation_Package_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Compensation_Package_Name: string;
        };
        Compensation_Grade_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Compensation_Grade_Name: string;
        };
        Compensation_Grade_Profile_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Compensation_Profile_Name: string;
            Compensation_Grade_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                Compensation_Grade_Name: string;
            };
        };
        Compensation_Step_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Compensation_Step_Name: string;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Progression_Start_Date: date;
        };
        Salary_Plan_for_Compensation_Data: Array<StaffingTypes.ISalary_Plan_for_Compensation_Data>;
        Hourly_Plan_for_Compensation_Data: Array<StaffingTypes.IHourly_Plan_for_Compensation_Data>;
        Unit_Salary_Plan_for_Compensation_Data: Array<StaffingTypes.IUnit_Salary_Plan_for_Compensation_Data>;
        Allowance_Plan_for_Compensation_Data: Array<StaffingTypes.IAllowance_Plan_for_Compensation_Data>;
        Unit_Allowance_Plan_for_Compensation_Data: Array<StaffingTypes.IUnit_Allowance_Plan_for_Compensation_Data>;
        Bonus_Plan_for_Compensation_Data: Array<StaffingTypes.IBonus_Plan_for_Compensation_Data>;
        Merit_Plan_for_Compensation_Data: Array<StaffingTypes.IMerit_Plan_for_Compensation_Data>;
        Commission_Plan_for_Compensation_Data: Array<StaffingTypes.ICommission_Plan_for_Compensation_Data>;
        Stock_Plan_for_Compensation_Data: Array<StaffingTypes.IStock_Plan_for_Compensation_Data>;
        Period_Salary_Plan_for_Compensation_Data: Array<StaffingTypes.IPeriod_Salary_Plan_for_Compensation_Data>;
        Calculated_Plan_for_Compensation_Data: Array<StaffingTypes.ICalculated_Plan_for_Compensation_Data>;
    }
    export interface IPosition_Payroll_Data_for_Worker_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Payroll_File_Number: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Employee_Type: string;
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Frequency_Name: string;
        };
        Pay_Group_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Pay_Group_ID: string;
        };
        Payroll_Entity_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Payroll_Entity_ID: string;
        };
    }
    export interface ICompany_Assignments_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICost_Center_Assignments_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRegion_Assignments_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICustom_Organization_Assignments_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IFund_Assignments_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IGrant_Assignments_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProgram_Assignments_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IBusiness_Unit_Assignments_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IGift_Assignments_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILocale_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IUser_Language_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPreferred_Search_Scope_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDelegated_Authentication_Integration_System_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface INotification_Sub_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IChannel_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDelivery_Frequency_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IUser_Notification_Frequency_Configuration {
        Channel_Reference: StaffingTypes.IChannel_Reference;
        Delivery_Frequency_Reference: StaffingTypes.IDelivery_Frequency_Reference;
    }
    export interface INotification_Sub_Type_Configuration {
        Notification_Sub_Type_Reference: StaffingTypes.INotification_Sub_Type_Reference;
        User_Notification_Frequency_Configuration: Array<StaffingTypes.IUser_Notification_Frequency_Configuration>;
    }
    export interface INotification_Sub_Type_Configurations {
        Notification_Sub_Type_Configuration: Array<StaffingTypes.INotification_Sub_Type_Configuration>;
    }
    export interface ISystem_User_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        User_Name: string;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Session_Timeout_Minutes: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Account_Disabled: boolean;
        /** urn:com.workday/bsvc#xsd:dateTime(undefined) */
        Account_Expiration_Date: dateTime;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Account_Locked: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Required_New_Password_At_Next_Login: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Show_User_Name_in_Browser_Window: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Display_XML_Icon_on_Reports: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Enable_Workbox: boolean;
        Locale_Reference: StaffingTypes.ILocale_Reference;
        User_Language_Reference: StaffingTypes.IUser_Language_Reference;
        Preferred_Search_Scope_Reference: StaffingTypes.IPreferred_Search_Scope_Reference;
        Delegated_Authentication_Integration_System_Reference: StaffingTypes.IDelegated_Authentication_Integration_System_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Allow_Mixed-Language_Transactions: boolean;
        Notification_Sub_Type_Configurations: Array<StaffingTypes.INotification_Sub_Type_Configurations>;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Password: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Generate_Random_Password: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exempt_from_Delegated_Authentication: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Passcode_Exempt: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Passcode_Grace_Period_Enabled: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Passcode_Grace_Period_Login_Remaining_Count: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        OpenID_Identifier: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        OpenID_Internal_Identifier: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        OpenID_Connect_Internal_Identifier: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Simplified_View: boolean;
    }
    export interface IDocument_Category_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEmployee_External_ID_Data {
        External_ID: Array<StaffingTypes.IExternal_ID>;
    }
    export interface IEvent_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEmployee_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IException_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Classification: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Message: string;
    }
    export interface IExceptions_Data {
        Exception_Data: Array<StaffingTypes.IException_Data>;
    }
    export interface IExceptions_Response_Data {
        Exceptions_Data: Array<StaffingTypes.IExceptions_Data>;
    }
    export interface IWorker_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IComment_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Comment: string;
        Worker_Reference: StaffingTypes.IWorker_Reference;
    }
    export interface IEvent_Attachment_Category_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IBusiness_Process_Attachment_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        File_Name: maxLength;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Event_Attachment_Description: string;
        Event_Attachment_Category_Reference: StaffingTypes.IEvent_Attachment_Category_Reference;
        /** urn:com.workday/bsvc#xsd:base64Binary(undefined) */
        File: base64Binary;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Content_Type: maxLength;
    }
    export interface IBusiness_Process_Parameters {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Auto_Complete: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Run_Now: boolean;
        Comment_Data: StaffingTypes.IComment_Data;
        Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
    }
    export interface IPrimary_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISecondary_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILocal_Termination_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRegrettable_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEligible_for_Hire_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ITerminate_Event_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Last_Day_of_Work: date;
        Primary_Reason_Reference: StaffingTypes.IPrimary_Reason_Reference;
        Secondary_Reason_Reference: Array<StaffingTypes.ISecondary_Reason_Reference>;
        Local_Termination_Reason_Reference: StaffingTypes.ILocal_Termination_Reason_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Pay_Through_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Resignation_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Notification_Date: date;
        Regrettable_Reference: StaffingTypes.IRegrettable_Reference;
        Eligible_for_Hire_Reference: StaffingTypes.IEligible_for_Hire_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Close_Position: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Job_Overlap_Allowed: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Last_Date_for_Which_Paid: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expected_Date_of_Return: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Not_Returning: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Return_Unknown: boolean;
        Worker_Document_Data: Array<{
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            File_Name: maxLength;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Worker_Document_Comment: string;
            Document_Category_Reference: StaffingTypes.IDocument_Category_Reference;
            /** urn:com.workday/bsvc#xsd:base64Binary(undefined) */
            File: base64Binary;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Content_Type: maxLength;
        }>;
    }
    export interface IBusiness_Process_Comment_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Comment: string;
        Worker_Reference: StaffingTypes.IWorker_Reference;
    }
    export interface IOne_Time_Payment_Plan_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICosting_Company_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IOne_Time_Payment_Worktags_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRequest_One_Time_Payment_Data {
        One_Time_Payment_Plan_Reference: StaffingTypes.IOne_Time_Payment_Plan_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Scheduled_Payment_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Coverage_Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Coverage_End_Date: date;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Amount: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Percent: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Comment: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Do_Not_Pay: boolean;
        Costing_Company_Reference: StaffingTypes.ICosting_Company_Reference;
        One_Time_Payment_Worktags_Reference: Array<StaffingTypes.IOne_Time_Payment_Worktags_Reference>;
    }
    export interface IReason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRequest_One_Time_Payment_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Request_One_Time_Payment_Data: Array<StaffingTypes.IRequest_One_Time_Payment_Data>;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        Reason_Reference: StaffingTypes.IReason_Reference;
    }
    export interface IParticipant_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IBenefit_Plan_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IReview_COBRA_Eligibility_Data {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        COBRA_Eligible: boolean;
        Reason_Reference: StaffingTypes.IReason_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        COBRA_Eligible_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Qualifying_Event_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Coverage_End_Date: date;
        Participant_Reference: Array<StaffingTypes.IParticipant_Reference>;
        Benefit_Plan_Reference: StaffingTypes.IBenefit_Plan_Reference;
    }
    export interface IReview_COBRA_Eligibility_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Review_COBRA_Eligibility_Data: Array<StaffingTypes.IReview_COBRA_Eligibility_Data>;
    }
    export interface IReview_Payroll_Interface_Event_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
    }
    export interface IEdit_Service_Dates_Event_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Original_Hire_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Continuous_Service_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expected_Retirement_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Retirement_Eligibility_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Employment_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Seniority_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Severance_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Contract_End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Benefits_Service_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Company_Service_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Time_Off_Service_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Vesting_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Date_Entered_Workforce: date;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Days_Unemployed: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Months_Continuous_Prior_Employment: totalDigits,minInclusive,fractionDigits;
    }
    export interface IEdit_Service_Dates_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Edit_Service_Dates_Event_Data: StaffingTypes.IEdit_Service_Dates_Event_Data;
    }
    export interface IRetirement_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRetiree_Organization_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAdd_Retiree_Status_Details {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Retirement_Date: date;
        Retirement_Reason_Reference: StaffingTypes.IRetirement_Reason_Reference;
        Retiree_Organization_Reference: StaffingTypes.IRetiree_Organization_Reference;
    }
    export interface IAdd_Retiree_Status_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Add_Retiree_Status_Details: StaffingTypes.IAdd_Retiree_Status_Details;
    }
    export interface IEmployee_Contract_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IContract_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEmployee_Contract_Collective_Agreement_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IContract_Status_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWorker_Document_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEmployee_Contract_Data {
        Employee_Contract_Reason_Reference: Array<StaffingTypes.IEmployee_Contract_Reason_Reference>;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Employee_Contract_ID: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Contract_ID: string;
        Contract_Type_Reference: StaffingTypes.IContract_Type_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Contract_Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Contract_End_Date: date;
        Employee_Contract_Collective_Agreement_Reference: Array<StaffingTypes.IEmployee_Contract_Collective_Agreement_Reference>;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Maximum_Weekly_Hours: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Minimum_Weekly_Hours: totalDigits,minInclusive,fractionDigits;
        Contract_Status_Reference: StaffingTypes.IContract_Status_Reference;
        Position_Reference: StaffingTypes.IPosition_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Contract_Description: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Date_Employee_Signed: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Date_Employer_Signed: date;
        Worker_Document_Reference: Array<StaffingTypes.IWorker_Document_Reference>;
    }
    export interface IMaintain_Employee_Contracts_Sub_Business_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Maintain_Employee_Contracts_Data: {
            Employee_Contract_Data: Array<StaffingTypes.IEmployee_Contract_Data>;
        };
    }
    export interface ICheck_Position_Budget_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
        };
    }
    export interface IRole_Assignee_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRole_Assignment_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRole_Assigner_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IOrganization_Role_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISingle_Assignment_Manager_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRole_Assignment {
        Role_Assignment_Reference: StaffingTypes.IRole_Assignment_Reference;
        Role_Assignment_Data: {
            Role_Assigner_Reference: StaffingTypes.IRole_Assigner_Reference;
            Organization_Role_Reference: StaffingTypes.IOrganization_Role_Reference;
            Role_Assignee_Reference: Array<StaffingTypes.IRole_Assignee_Reference>;
            Single_Assignment_Manager_Reference: StaffingTypes.ISingle_Assignment_Manager_Reference;
        };
    }
    export interface IAssign_Organization_Roles_Event_Data {
        Role_Assignee_Reference: StaffingTypes.IRole_Assignee_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        Role_Assignment: Array<StaffingTypes.IRole_Assignment>;
    }
    export interface IAssign_Organization_Roles_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Assign_Organization_Roles_Event_Data: StaffingTypes.IAssign_Organization_Roles_Event_Data;
    }
    export interface ICreate_Job_Requisition_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRecruiting_Instruction_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IJob_Requisition_Attachment_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        File_Name: maxLength;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Comment: string;
        /** urn:com.workday/bsvc#xsd:base64Binary(undefined) */
        File: base64Binary;
    }
    export interface IJob_Requisition_Attachments {
        Job_Requisition_Attachment_Data: Array<StaffingTypes.IJob_Requisition_Attachment_Data>;
    }
    export interface IAdditional_Job_Profiles_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IReferral_Payment_Plan_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWorker_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWorker_Sub-Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPrimary_Location_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPrimary_Job_Posting_Location_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAdditional_Locations_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAdditional_Job_Posting_Locations_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEmployee_Contract_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILink_to_Evergreen_Requisition_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IQuestionnaire_for_Internal_Career_Site_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISecondary_Questionnaire_for_Internal_Career_Site_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IQuestionnaire_for_External_Career_Sites_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISecondary_Questionnaire_for_External_Career_Site_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IQuestionnaire_Data {
        Questionnaire_for_Internal_Career_Site_Reference: StaffingTypes.IQuestionnaire_for_Internal_Career_Site_Reference;
        Secondary_Questionnaire_for_Internal_Career_Site_Reference: StaffingTypes.ISecondary_Questionnaire_for_Internal_Career_Site_Reference;
        Questionnaire_for_External_Career_Sites_Reference: StaffingTypes.IQuestionnaire_for_External_Career_Sites_Reference;
        Secondary_Questionnaire_for_External_Career_Site_Reference: StaffingTypes.ISecondary_Questionnaire_for_External_Career_Site_Reference;
    }
    export interface IInline_Assessment_Test_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDefault_Assessment_Tests_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAssessment_Data {
        Inline_Assessment_Test_Reference: StaffingTypes.IInline_Assessment_Test_Reference;
        Default_Assessment_Tests_Reference: Array<StaffingTypes.IDefault_Assessment_Tests_Reference>;
    }
    export interface IResponsibility_Qualification_Replacement_Data {
        /** urn:com.workday/bsvc#RichText(undefined) */
        Responsibility_Description: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Required: boolean;
    }
    export interface IResponsibility_Qualification_Replacement {
        Responsibility_Qualification_Replacement_Data: Array<StaffingTypes.IResponsibility_Qualification_Replacement_Data>;
    }
    export interface IWorker_Experience_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWork_Experience_Rating_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWork_Experience_Qualification_Replacement_Data {
        Worker_Experience_Reference: StaffingTypes.IWorker_Experience_Reference;
        Work_Experience_Rating_Reference: StaffingTypes.IWork_Experience_Rating_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Required: boolean;
    }
    export interface IWork_Experience_Qualification_Replacement {
        Work_Experience_Qualification_Replacement_Data: Array<StaffingTypes.IWork_Experience_Qualification_Replacement_Data>;
    }
    export interface IDegree_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IField_Of_Study_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEducation_Qualification_Replacement_Data {
        Degree_Reference: StaffingTypes.IDegree_Reference;
        Field_Of_Study_Reference: StaffingTypes.IField_Of_Study_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Required: boolean;
    }
    export interface IEducation_Qualification_Replacement {
        Education_Qualification_Replacement_Data: Array<StaffingTypes.IEducation_Qualification_Replacement_Data>;
    }
    export interface ILanguage_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILanguage_Ability_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILanguage_Proficiency_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILanguage_Ability_Profile_Data {
        Language_Ability_Type_Reference: StaffingTypes.ILanguage_Ability_Type_Reference;
        Language_Proficiency_Reference: StaffingTypes.ILanguage_Proficiency_Reference;
    }
    export interface ILanguage_Qualification_Replacement_Data {
        Language_Reference: StaffingTypes.ILanguage_Reference;
        Language_Ability_Profile_Data: Array<StaffingTypes.ILanguage_Ability_Profile_Data>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Required: boolean;
    }
    export interface ILanguage_Qualification_Replacement {
        Language_Qualification_Replacement_Data: Array<StaffingTypes.ILanguage_Qualification_Replacement_Data>;
    }
    export interface ICompetency_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProficiency_Rating_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICompetency_Qualification_Replacement_Data {
        Competency_Reference: StaffingTypes.ICompetency_Reference;
        Proficiency_Rating_Reference: StaffingTypes.IProficiency_Rating_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Required: boolean;
    }
    export interface ICompetency_Qualification_Replacement {
        Competency_Qualification_Replacement_Data: Array<StaffingTypes.ICompetency_Qualification_Replacement_Data>;
    }
    export interface ICountry_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICertification_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISpecialty_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISubspecialty_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISpecialty_Achievement_Reference {
        Specialty_Reference: StaffingTypes.ISpecialty_Reference;
        Subspecialty_Reference: Array<StaffingTypes.ISubspecialty_Reference>;
    }
    export interface ICertification_Qualification_Replacement_Data {
        Country_Reference: StaffingTypes.ICountry_Reference;
        Certification_Reference: StaffingTypes.ICertification_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Name: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Issuer: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Required: boolean;
        Specialty_Achievement_Reference: Array<StaffingTypes.ISpecialty_Achievement_Reference>;
    }
    export interface ICertification_Qualification_Replacement {
        Certification_Qualification_Replacement_Data: Array<StaffingTypes.ICertification_Qualification_Replacement_Data>;
    }
    export interface ITraining_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ITraining_Qualification_Replacement_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Training_Name: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Description: string;
        Training_Type_Reference: StaffingTypes.ITraining_Type_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Required: boolean;
    }
    export interface ITraining_Qualification_Replacement {
        Training_Qualification_Replacement_Data: Array<StaffingTypes.ITraining_Qualification_Replacement_Data>;
    }
    export interface ISkill_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISkill_Qualification_Replacement_Data {
        Skill_Reference: StaffingTypes.ISkill_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Name: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Required: boolean;
    }
    export interface ISkill_Qualification_Replacement {
        Skill_Qualification_Replacement_Data: Array<StaffingTypes.ISkill_Qualification_Replacement_Data>;
    }
    export interface IQualification_Replacement_Data {
        Responsibility_Qualification_Replacement: StaffingTypes.IResponsibility_Qualification_Replacement;
        Work_Experience_Qualification_Replacement: StaffingTypes.IWork_Experience_Qualification_Replacement;
        Education_Qualification_Replacement: StaffingTypes.IEducation_Qualification_Replacement;
        Language_Qualification_Replacement: StaffingTypes.ILanguage_Qualification_Replacement;
        Competency_Qualification_Replacement: StaffingTypes.ICompetency_Qualification_Replacement;
        Certification_Qualification_Replacement: StaffingTypes.ICertification_Qualification_Replacement;
        Training_Qualification_Replacement: StaffingTypes.ITraining_Qualification_Replacement;
        Skill_Qualification_Replacement: StaffingTypes.ISkill_Qualification_Replacement;
    }
    export interface IRequester_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICompany_for_Purchase_Order_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISupplier_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISpend_Category_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWorktags_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IContingent_Worker_Cost_Information {
        Requester_Reference: StaffingTypes.IRequester_Reference;
        Company_for_Purchase_Order_Reference: StaffingTypes.ICompany_for_Purchase_Order_Reference;
        Supplier_Reference: StaffingTypes.ISupplier_Reference;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Spend_Category_Reference: StaffingTypes.ISpend_Category_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Pay_Rate: totalDigits,minInclusive,fractionDigits;
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Maximum_Amount: totalDigits,minInclusive,fractionDigits;
        Worktags_Reference: Array<StaffingTypes.IWorktags_Reference>;
    }
    export interface IReplacement_for_Worker_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICompany_Assignment_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICost_Center_Assignment_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRegion_Assignment_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IBusiness_Unit_Assignment_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IGrant_Assignment_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProgram_Assignment_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IFund_Assignment_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IGift_Assignment_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICustom_Organization_Assignment_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IOrganization_Assignments_for_Job_Requisition_Data {
        Company_Assignment_Reference: StaffingTypes.ICompany_Assignment_Reference;
        Cost_Center_Assignment_Reference: StaffingTypes.ICost_Center_Assignment_Reference;
        Region_Assignment_Reference: StaffingTypes.IRegion_Assignment_Reference;
        Business_Unit_Assignment_Reference: StaffingTypes.IBusiness_Unit_Assignment_Reference;
        Grant_Assignment_Reference: StaffingTypes.IGrant_Assignment_Reference;
        Program_Assignment_Reference: StaffingTypes.IProgram_Assignment_Reference;
        Fund_Assignment_Reference: StaffingTypes.IFund_Assignment_Reference;
        Gift_Assignment_Reference: StaffingTypes.IGift_Assignment_Reference;
        Custom_Organization_Assignment_Reference: Array<StaffingTypes.ICustom_Organization_Assignment_Reference>;
    }
    export interface IJob_Application_Template_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICheck_Position_Budget_Sub_Process_for_Create_Job_Requisition {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
        };
    }
    export interface ICreate_Job_Requisition_Data {
        Create_Job_Requisition_Reason_Reference: StaffingTypes.ICreate_Job_Requisition_Reason_Reference;
        Job_Requisition_Data: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Job_Requisition_ID: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Job_Posting_Title: string;
            Recruiting_Instruction_Reference: StaffingTypes.IRecruiting_Instruction_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Job_Description_Summary: string;
            /** urn:com.workday/bsvc#RichText(undefined) */
            Job_Description: string;
            /** urn:com.workday/bsvc#RichText(undefined) */
            Additional_Job_Description: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Justification: string;
            Job_Requisition_Attachments: Array<StaffingTypes.IJob_Requisition_Attachments>;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Recruiting_Start_Date: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Target_Hire_Date: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Target_End_Date: date;
            Job_Profile_Reference: StaffingTypes.IJob_Profile_Reference;
            Additional_Job_Profiles_Reference: Array<StaffingTypes.IAdditional_Job_Profiles_Reference>;
            Referral_Payment_Plan_Reference: StaffingTypes.IReferral_Payment_Plan_Reference;
            Worker_Type_Reference: StaffingTypes.IWorker_Type_Reference;
            Worker_Sub-Type_Reference: StaffingTypes.IWorker_Sub-Type_Reference;
            Primary_Location_Reference: StaffingTypes.IPrimary_Location_Reference;
            Primary_Job_Posting_Location_Reference: StaffingTypes.IPrimary_Job_Posting_Location_Reference;
            Additional_Locations_Reference: Array<StaffingTypes.IAdditional_Locations_Reference>;
            Additional_Job_Posting_Locations_Reference: Array<StaffingTypes.IAdditional_Job_Posting_Locations_Reference>;
            Position_Time_Type_Reference: StaffingTypes.IPosition_Time_Type_Reference;
            Employee_Contract_Type_Reference: StaffingTypes.IEmployee_Contract_Type_Reference;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Scheduled_Weekly_Hours: totalDigits,fractionDigits;
            Work_Shift_Reference: StaffingTypes.IWork_Shift_Reference;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Spotlight_Job: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Confidential_Job_Requisition: boolean;
            Link_to_Evergreen_Requisition_Reference: StaffingTypes.ILink_to_Evergreen_Requisition_Reference;
            Questionnaire_Data: StaffingTypes.IQuestionnaire_Data;
            Assessment_Data: StaffingTypes.IAssessment_Data;
            Qualification_Replacement_Data: StaffingTypes.IQualification_Replacement_Data;
            Contingent_Worker_Cost_Information: StaffingTypes.IContingent_Worker_Cost_Information;
            Replacement_for_Worker_Reference: StaffingTypes.IReplacement_for_Worker_Reference;
            Organization_Data: {
                Organization_Assignments_for_Job_Requisition_Data: StaffingTypes.IOrganization_Assignments_for_Job_Requisition_Data;
            };
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Use_Updated_Template_Version: boolean;
            Job_Application_Template_Reference: StaffingTypes.IJob_Application_Template_Reference;
        };
        Check_Position_Budget_Sub_Process_for_Create_Job_Requisition: StaffingTypes.ICheck_Position_Budget_Sub_Process_for_Create_Job_Requisition;
    }
    export interface ICreate_Job_Requisition_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Create_Job_Requisition_Data: StaffingTypes.ICreate_Job_Requisition_Data;
    }
    export interface IAcademic_Appointee_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAcademic_Appointment_Track_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEnd_Academic_Appointment_Data {
        Academic_Appointee_Reference: StaffingTypes.IAcademic_Appointee_Reference;
        Academic_Appointment_Track_Reference: StaffingTypes.IAcademic_Appointment_Track_Reference;
        Reason_Reference: StaffingTypes.IReason_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Track_End_Date: date;
    }
    export interface IEnd_Academic_Appointment_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        End_Academic_Appointment_Data: StaffingTypes.IEnd_Academic_Appointment_Data;
    }
    export interface ICosting_Interval_Update_Key {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Costing_Override_ID_Update_Key: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Start_Date_Update_Key: date;
    }
    export interface ICosting_Override_Company_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICosting_Override_Worktag_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISOC_Costing_Override_Company_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISOC_Override_Worktag_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISalary_Over_the_Cap_Costing_Allocation_Detail_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        SOC_Order: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        SOC_Default_from_Organization_Assignment: boolean;
        SOC_Costing_Override_Company_Reference: StaffingTypes.ISOC_Costing_Override_Company_Reference;
        SOC_Override_Worktag_Reference: Array<StaffingTypes.ISOC_Override_Worktag_Reference>;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        SOC_Distribution_Percent: totalDigits,minInclusive,fractionDigits;
    }
    export interface ICosting_Allocation_Detail_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Order: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Default_from_Organization_Assignment: boolean;
        Costing_Override_Company_Reference: StaffingTypes.ICosting_Override_Company_Reference;
        Costing_Override_Worktag_Reference: Array<StaffingTypes.ICosting_Override_Worktag_Reference>;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Distribution_Percent: totalDigits,minInclusive,fractionDigits;
        Salary_Over_the_Cap_Costing_Allocation_Detail_Data: Array<StaffingTypes.ISalary_Over_the_Cap_Costing_Allocation_Detail_Data>;
    }
    export interface ICosting_Override_Data {
        Costing_Interval_Update_Key: Array<StaffingTypes.ICosting_Interval_Update_Key>;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Costing_Override_ID: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Date: date;
        Costing_Allocation_Detail_Data: Array<StaffingTypes.ICosting_Allocation_Detail_Data>;
    }
    export interface ICosting_Allocation_Level_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICosting_Allocation_Earning_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPosition_Costing_Allocation_Assignment_Data {
        Costing_Override_Data: Array<StaffingTypes.ICosting_Override_Data>;
        Costing_Allocation_Level_Reference: StaffingTypes.ICosting_Allocation_Level_Reference;
        Costing_Allocation_Earning_Reference: StaffingTypes.ICosting_Allocation_Earning_Reference;
    }
    export interface IAssign_Costing_Allocation_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Position_Costing_Allocation_Assignment_Data: StaffingTypes.IPosition_Costing_Allocation_Assignment_Data;
    }
    export interface IUnion_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IMembership_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRelated_Position_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IUnion_Membership_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Date: date;
        Membership_Type_Reference: StaffingTypes.IMembership_Type_Reference;
        Related_Position_Reference: StaffingTypes.IRelated_Position_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Notes: string;
    }
    export interface IUnion_Member_Data {
        Worker_Reference: StaffingTypes.IWorker_Reference;
        Union_Reference: StaffingTypes.IUnion_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Seniority_Date: date;
        Union_Membership_Data: Array<StaffingTypes.IUnion_Membership_Data>;
    }
    export interface IManage_Union_Membership_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Union_Member_Data: StaffingTypes.IUnion_Member_Data;
    }
    export interface IEnd_Collective_Agreement_Assignment_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
    }
    export interface IEnd_Collective_Agreement_Assignment_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        End_Collective_Agreement_Assignment_Data: StaffingTypes.IEnd_Collective_Agreement_Assignment_Data;
    }
    export interface ITerminate_Employee_Data {
        Employee_Reference: StaffingTypes.IEmployee_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Termination_Date: date;
        Terminate_Event_Data: StaffingTypes.ITerminate_Event_Data;
        Request_One_Time_Payment_Sub_Process: StaffingTypes.IRequest_One_Time_Payment_Sub_Process;
        Review_COBRA_Eligibility_Sub_Process: StaffingTypes.IReview_COBRA_Eligibility_Sub_Process;
        Review_Payroll_Interface_Event_Sub_Process: StaffingTypes.IReview_Payroll_Interface_Event_Sub_Process;
        Edit_Service_Dates_Sub_Process: StaffingTypes.IEdit_Service_Dates_Sub_Process;
        Add_Retiree_Status_Sub_Process: StaffingTypes.IAdd_Retiree_Status_Sub_Process;
        Maintain_Employee_Contracts_Sub_Business_Process: StaffingTypes.IMaintain_Employee_Contracts_Sub_Business_Process;
        Check_Position_Budget_Sub_Process: StaffingTypes.ICheck_Position_Budget_Sub_Process;
        Assign_Organization_Roles_Sub_Process: StaffingTypes.IAssign_Organization_Roles_Sub_Process;
        Create_Job_Requisition_Sub_Process: StaffingTypes.ICreate_Job_Requisition_Sub_Process;
        End_Academic_Appointment_Sub_Process: StaffingTypes.IEnd_Academic_Appointment_Sub_Process;
        Assign_Costing_Allocation_Sub_Process: StaffingTypes.IAssign_Costing_Allocation_Sub_Process;
        Manage_Union_Membership_Sub_Process: StaffingTypes.IManage_Union_Membership_Sub_Process;
        End_Collective_Agreement_Assignment_Sub_Process: StaffingTypes.IEnd_Collective_Agreement_Assignment_Sub_Process;
    }
    export interface ITransaction_Date_Range_Data {
        /** urn:com.workday/bsvc#xsd:dateTime(undefined) */
        Updated_From: dateTime;
        /** urn:com.workday/bsvc#xsd:dateTime(undefined) */
        Updated_Through: dateTime;
        /** urn:com.workday/bsvc#xsd:dateTime(undefined) */
        Effective_From: dateTime;
        /** urn:com.workday/bsvc#xsd:dateTime(undefined) */
        Effective_Through: dateTime;
    }
    export interface ITransaction_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ITransaction_Type_References {
        Transaction_Type_Reference: Array<StaffingTypes.ITransaction_Type_Reference>;
    }
    export interface ISubscriber_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ITransaction_Log_Criteria_Data {
        Transaction_Date_Range_Data: StaffingTypes.ITransaction_Date_Range_Data;
        Transaction_Type_References: StaffingTypes.ITransaction_Type_References;
        Subscriber_Reference: StaffingTypes.ISubscriber_Reference;
    }
    export interface IProvider_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IField_And_Parameter_Criteria_Data {
        Provider_Reference: Array<StaffingTypes.IProvider_Reference>;
    }
    export interface INational_ID_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface INational_ID_Criteria_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Identifier_ID: string;
        National_ID_Type_Reference: StaffingTypes.INational_ID_Type_Reference;
        Country_Reference: StaffingTypes.ICountry_Reference;
    }
    export interface IField_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEligibility_Criteria_Data {
        Field_Reference: StaffingTypes.IField_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        As_Of_Effective_Date: date;
        /** urn:com.workday/bsvc#xsd:dateTime(undefined) */
        As_Of_Entry_DateTime: dateTime;
    }
    export interface IUniversal_ID_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IResponse_Filter {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        As_Of_Effective_Date: date;
        /** urn:com.workday/bsvc#xsd:dateTime(undefined) */
        As_Of_Entry_DateTime: dateTime;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Page: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Count: totalDigits,minInclusive,fractionDigits;
    }
    export interface IResponse_Results {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Total_Results: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Total_Pages: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Page_Results: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Page: totalDigits,minInclusive,fractionDigits;
    }
    export interface IUniversal_Identifier_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ITitle_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISalutation_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPrefix_Data {
        Title_Reference: StaffingTypes.ITitle_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Title_Descriptor: string;
        Salutation_Reference: StaffingTypes.ISalutation_Reference;
    }
    export interface ILocal_Name_Detail_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        First_Name: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Middle_Name: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Last_Name: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Secondary_Last_Name: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        First_Name_2: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Middle_Name_2: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Last_Name_2: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Secondary_Last_Name_2: string;
    }
    export interface ISocial_Suffix_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAcademic_Suffix_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IHereditary_Suffix_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IHonorary_Suffix_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProfessional_Suffix_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IReligious_Suffix_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRoyal_Suffix_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISuffix_Data {
        Social_Suffix_Reference: StaffingTypes.ISocial_Suffix_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Social_Suffix_Descriptor: string;
        Academic_Suffix_Reference: StaffingTypes.IAcademic_Suffix_Reference;
        Hereditary_Suffix_Reference: StaffingTypes.IHereditary_Suffix_Reference;
        Honorary_Suffix_Reference: StaffingTypes.IHonorary_Suffix_Reference;
        Professional_Suffix_Reference: StaffingTypes.IProfessional_Suffix_Reference;
        Religious_Suffix_Reference: StaffingTypes.IReligious_Suffix_Reference;
        Royal_Suffix_Reference: StaffingTypes.IRoyal_Suffix_Reference;
    }
    export interface IName_Detail_Data {
        Country_Reference: StaffingTypes.ICountry_Reference;
        Prefix_Data: StaffingTypes.IPrefix_Data;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        First_Name: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Middle_Name: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Last_Name: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Secondary_Last_Name: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Tertiary_Last_Name: string;
        Local_Name_Detail_Data: StaffingTypes.ILocal_Name_Detail_Data;
        Suffix_Data: StaffingTypes.ISuffix_Data;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Full_Name_for_Singapore_and_Malaysia: string;
    }
    export interface ILegal_Name_Data {
        Name_Detail_Data: StaffingTypes.IName_Detail_Data;
    }
    export interface IPreferred_Name_Data {
        Name_Detail_Data: StaffingTypes.IName_Detail_Data;
    }
    export interface IName_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAdditional_Name_Data {
        Name_Detail_Data: StaffingTypes.IName_Detail_Data;
        Name_Type_Reference: StaffingTypes.IName_Type_Reference;
    }
    export interface IGender_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICountry_of_Birth_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRegion_of_Birth_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICity_of_Birth_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IMarital_Status_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IReligion_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDisability_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDisability_Grade_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDisability_Certification_Authority_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDisability_Certification_Basis_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDisability_Status_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEthnicity_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICitizenship_Status_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPrimary_Nationality_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAdditional_Nationality_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IHukou_Region_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IHukou_Subregion_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IHukou_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface INative_Region_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IBlood_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IStatus_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IMilitary_Service_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IMilitary_Rank_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IMilitary_Service_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface INational_ID_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IID_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IVerified_By_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface INational_ID_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
        ID_Type_Reference: StaffingTypes.IID_Type_Reference;
        Country_Reference: StaffingTypes.ICountry_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Issued_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expiration_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Verification_Date: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Series: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Issuing_Agency: string;
        Verified_By_Reference: StaffingTypes.IVerified_By_Reference;
    }
    export interface INational_ID_Shared_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface INational_ID {
        National_ID_Reference: StaffingTypes.INational_ID_Reference;
        National_ID_Data: StaffingTypes.INational_ID_Data;
        National_ID_Shared_Reference: StaffingTypes.INational_ID_Shared_Reference;
    }
    export interface IGovernment_ID_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IVerified_by_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IGovernment_ID_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
        ID_Type_Reference: StaffingTypes.IID_Type_Reference;
        Country_Reference: StaffingTypes.ICountry_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Issued_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expiration_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Verification_Date: date;
        Verified_by_Reference: StaffingTypes.IVerified_by_Reference;
    }
    export interface IGovernment_ID_Shared_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IGovernment_ID {
        Government_ID_Reference: StaffingTypes.IGovernment_ID_Reference;
        Government_ID_Data: StaffingTypes.IGovernment_ID_Data;
        Government_ID_Shared_Reference: StaffingTypes.IGovernment_ID_Shared_Reference;
    }
    export interface IVisa_ID_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IVisa_ID_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
        ID_Type_Reference: StaffingTypes.IID_Type_Reference;
        Country_Reference: StaffingTypes.ICountry_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Issued_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expiration_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Verification_Date: date;
        Verified_By_Reference: StaffingTypes.IVerified_By_Reference;
    }
    export interface IVisa_ID_Shared_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IVisa_ID {
        Visa_ID_Reference: StaffingTypes.IVisa_ID_Reference;
        Visa_ID_Data: StaffingTypes.IVisa_ID_Data;
        Visa_ID_Shared_Reference: StaffingTypes.IVisa_ID_Shared_Reference;
    }
    export interface IPassport_ID_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPassport_ID_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
        ID_Type_Reference: StaffingTypes.IID_Type_Reference;
        Country_Reference: StaffingTypes.ICountry_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Issued_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expiration_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Verification_Date: date;
        Verified_By_Reference: StaffingTypes.IVerified_By_Reference;
    }
    export interface IPassport_ID_Shared_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPassport_ID {
        Passport_ID_Reference: StaffingTypes.IPassport_ID_Reference;
        Passport_ID_Data: StaffingTypes.IPassport_ID_Data;
        Passport_ID_Shared_Reference: StaffingTypes.IPassport_ID_Shared_Reference;
    }
    export interface ILicense_ID_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICountry_Region_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAuthority_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILicense_ID_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
        ID_Type_Reference: StaffingTypes.IID_Type_Reference;
        Country_Reference: StaffingTypes.ICountry_Reference;
        Country_Region_Reference: StaffingTypes.ICountry_Region_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Country_Region_Descriptor: string;
        Authority_Reference: StaffingTypes.IAuthority_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        License_Class: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Issued_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expiration_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Verification_Date: date;
        Verified_By_Reference: StaffingTypes.IVerified_By_Reference;
    }
    export interface ILicense_ID_Shared_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILicense_ID {
        License_ID_Reference: StaffingTypes.ILicense_ID_Reference;
        License_ID_Data: StaffingTypes.ILicense_ID_Data;
        License_ID_Shared_Reference: StaffingTypes.ILicense_ID_Shared_Reference;
    }
    export interface ICustom_ID_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IOrganization_ID_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICustom_ID_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
        ID_Type_Reference: StaffingTypes.IID_Type_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Issued_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expiration_Date: date;
        Organization_ID_Reference: StaffingTypes.IOrganization_ID_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Custom_Description: string;
    }
    export interface ICustom_ID_Shared_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICustom_ID {
        Custom_ID_Reference: StaffingTypes.ICustom_ID_Reference;
        Custom_ID_Data: StaffingTypes.ICustom_ID_Data;
        Custom_ID_Shared_Reference: StaffingTypes.ICustom_ID_Shared_Reference;
    }
    export interface IIdentification_Data {
        National_ID: Array<StaffingTypes.INational_ID>;
        Government_ID: Array<StaffingTypes.IGovernment_ID>;
        Visa_ID: Array<StaffingTypes.IVisa_ID>;
        Passport_ID: Array<StaffingTypes.IPassport_ID>;
        License_ID: Array<StaffingTypes.ILicense_ID>;
        Custom_ID: Array<StaffingTypes.ICustom_ID>;
    }
    export interface ICountry_City_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IType_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IType_Data {
        Type_Reference: StaffingTypes.IType_Reference;
    }
    export interface IUse_For_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IUse_For_Tenanted_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IUsage_Data {
        Type_Data: Array<StaffingTypes.IType_Data>;
        Use_For_Reference: Array<StaffingTypes.IUse_For_Reference>;
        Use_For_Tenanted_Reference: Array<StaffingTypes.IUse_For_Tenanted_Reference>;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Comments: string;
    }
    export interface IAddress_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAddress_Data {
        Country_Reference: StaffingTypes.ICountry_Reference;
        /** urn:com.workday/bsvc#xsd:dateTime(undefined) */
        Last_Modified: dateTime;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Address_Line_Data: string>;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Municipality: string;
        Country_City_Reference: StaffingTypes.ICountry_City_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Submunicipality_Data: string>;
        Country_Region_Reference: StaffingTypes.ICountry_Region_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Country_Region_Descriptor: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Subregion_Data: string>;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Postal_Code: string;
        Usage_Data: Array<StaffingTypes.IUsage_Data>;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Number_of_Days: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Municipality_Local: string;
        Address_Reference: StaffingTypes.IAddress_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Address_ID: string;
    }
    export interface IPhone_Device_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPhone_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPhone_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Country_ISO_Code: maxLength;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        International_Phone_Code: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Phone_Number: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Phone_Extension: string;
        Phone_Device_Type_Reference: StaffingTypes.IPhone_Device_Type_Reference;
        Usage_Data: Array<StaffingTypes.IUsage_Data>;
        Phone_Reference: StaffingTypes.IPhone_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
    }
    export interface IEmail_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEmail_Address_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Email_Address: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Email_Comment: string;
        Usage_Data: Array<StaffingTypes.IUsage_Data>;
        Email_Reference: StaffingTypes.IEmail_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
    }
    export interface IInstant_Messenger_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IInstant_Messenger_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IInstant_Messenger_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Instant_Messenger_Address: string;
        Instant_Messenger_Type_Reference: StaffingTypes.IInstant_Messenger_Type_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Instant_Messenger_Comment: string;
        Usage_Data: Array<StaffingTypes.IUsage_Data>;
        Instant_Messenger_Reference: StaffingTypes.IInstant_Messenger_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
    }
    export interface IWeb_Address_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWeb_Address_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Web_Address: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Web_Address_Comment: string;
        Usage_Data: Array<StaffingTypes.IUsage_Data>;
        Web_Address_Reference: StaffingTypes.IWeb_Address_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
    }
    export interface IContact_Data {
        Address_Data: Array<StaffingTypes.IAddress_Data>;
        Phone_Data: Array<StaffingTypes.IPhone_Data>;
        Email_Address_Data: Array<StaffingTypes.IEmail_Address_Data>;
        Instant_Messenger_Data: Array<StaffingTypes.IInstant_Messenger_Data>;
        Web_Address_Data: Array<StaffingTypes.IWeb_Address_Data>;
    }
    export interface IPolitical_Affiliation_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISocial_Benefits_Locality_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRelative_Name_Reference_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRelative_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRelative_Name_Data {
        Relative_Name_Reference_Reference: StaffingTypes.IRelative_Name_Reference_Reference;
        Relative_Type_Reference: StaffingTypes.IRelative_Type_Reference;
        Name_Detail_Data: StaffingTypes.IName_Detail_Data;
    }
    export interface IRelative_Name_Information_Data {
        Relative_Name_Data: Array<StaffingTypes.IRelative_Name_Data>;
    }
    export interface IPersonal_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Universal_ID: string;
        Name_Data: {
            Legal_Name_Data: StaffingTypes.ILegal_Name_Data;
            Preferred_Name_Data: StaffingTypes.IPreferred_Name_Data;
            Additional_Name_Data: Array<StaffingTypes.IAdditional_Name_Data>;
        };
        Gender_Reference: StaffingTypes.IGender_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Birth_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Date_of_Death: date;
        Country_of_Birth_Reference: StaffingTypes.ICountry_of_Birth_Reference;
        Region_of_Birth_Reference: StaffingTypes.IRegion_of_Birth_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Region_of_Birth_Descriptor: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        City_of_Birth: string;
        City_of_Birth_Reference: StaffingTypes.ICity_of_Birth_Reference;
        Marital_Status_Reference: StaffingTypes.IMarital_Status_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Marital_Status_Date: date;
        Religion_Reference: StaffingTypes.IReligion_Reference;
        Disability_Status_Data: Array<{
            Disability_Reference: StaffingTypes.IDisability_Reference;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Disability_Status_Date: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Disability_Date_Known: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Disability_End_Date: date;
            Disability_Grade_Reference: StaffingTypes.IDisability_Grade_Reference;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Disability_Degree: totalDigits,minInclusive,fractionDigits;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Disability_Remaining_Capacity: totalDigits,minInclusive,fractionDigits;
            Disability_Certification_Authority_Reference: StaffingTypes.IDisability_Certification_Authority_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Disability_Certification_Authority: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Disability_Certified_At: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Disability_Certification_ID: string;
            Disability_Certification_Basis_Reference: StaffingTypes.IDisability_Certification_Basis_Reference;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Disability_Severity_Recognition_Date: date;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Disability_FTE_Toward_Quota: totalDigits,minInclusive,fractionDigits;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Disability_Work_Restrictions: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Disability_Accommodations_Requested: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Disability_Accommodations_Provided: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Disability_Rehabilitation_Requested: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Disability_Rehabilitation_Provided: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Note: string;
            Worker_Document_Reference: Array<StaffingTypes.IWorker_Document_Reference>;
            Disability_Status_Reference: StaffingTypes.IDisability_Status_Reference;
        }>;
        Ethnicity_Reference: Array<StaffingTypes.IEthnicity_Reference>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Hispanic_or_Latino: boolean;
        Citizenship_Status_Reference: Array<StaffingTypes.ICitizenship_Status_Reference>;
        Primary_Nationality_Reference: StaffingTypes.IPrimary_Nationality_Reference;
        Additional_Nationality_Reference: Array<StaffingTypes.IAdditional_Nationality_Reference>;
        Hukou_Region_Reference: StaffingTypes.IHukou_Region_Reference;
        Hukou_Subregion_Reference: StaffingTypes.IHukou_Subregion_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Hukou_Locality: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Hukou_Postal_Code: string;
        Hukou_Type_Reference: StaffingTypes.IHukou_Type_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Local_Hukou: boolean;
        Native_Region_Reference: StaffingTypes.INative_Region_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Native_Region_Descriptor: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Personnel_File_Agency_for_Person: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Last_Medical_Exam_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Last_Medical_Exam_Valid_To: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Medical_Exam_Notes: string;
        Blood_Type_Reference: StaffingTypes.IBlood_Type_Reference;
        Military_Service_Data: Array<{
            Status_Reference: StaffingTypes.IStatus_Reference;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Discharge_Date: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Status_Begin_Date: date;
            Military_Service_Type_Reference: StaffingTypes.IMilitary_Service_Type_Reference;
            Military_Rank_Reference: StaffingTypes.IMilitary_Rank_Reference;
            /** urn:com.workday/bsvc#RichText(undefined) */
            Notes: string;
            Military_Service_Reference: StaffingTypes.IMilitary_Service_Reference;
        }>;
        Identification_Data: StaffingTypes.IIdentification_Data;
        Contact_Data: StaffingTypes.IContact_Data;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Tobacco_Use: boolean;
        Political_Affiliation_Reference: StaffingTypes.IPolitical_Affiliation_Reference;
        Social_Benefits_Locality_Reference: StaffingTypes.ISocial_Benefits_Locality_Reference;
        Relative_Name_Information_Data: StaffingTypes.IRelative_Name_Information_Data;
    }
    export interface IHeadcount_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEnd_Employment_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IJob_Group_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IJob_Classification_Summary_Data {
        Job_Classification_Reference: StaffingTypes.IJob_Classification_Reference;
        Job_Group_Reference: StaffingTypes.IJob_Group_Reference;
    }
    export interface ICompany_Insider_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWork_Hours_Profiles_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWorkers_Compensation_Code_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWorker_Compensation_Code_Data {
        Workers_Compensation_Code_Reference: StaffingTypes.IWorkers_Compensation_Code_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Workers_Compensation_Code: string;
    }
    export interface IPayroll_Reporting_Code_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPayroll_Reporting_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPosition_Payroll_Reporting_Code_Data {
        Payroll_Reporting_Code_Reference: StaffingTypes.IPayroll_Reporting_Code_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Code: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Formatted_Code: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Name: string;
        Payroll_Reporting_Type_Reference: StaffingTypes.IPayroll_Reporting_Type_Reference;
    }
    export interface IManagement_Level_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IJob_Category_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IJob_Family_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDifficulty_to_Fill_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IJob_Profile_Summary_Data {
        Job_Profile_Reference: StaffingTypes.IJob_Profile_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Job_Exempt: boolean;
        Management_Level_Reference: StaffingTypes.IManagement_Level_Reference;
        Job_Category_Reference: StaffingTypes.IJob_Category_Reference;
        Job_Family_Reference: Array<StaffingTypes.IJob_Family_Reference>;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Job_Profile_Name: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Work_Shift_Required: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Critical_Job: boolean;
        Difficulty_to_Fill_Reference: StaffingTypes.IDifficulty_to_Fill_Reference;
    }
    export interface ILocation_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILocal_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDisplay_Language_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ITime_Profile_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IBusiness_Site_Summary_Data {
        Location_Reference: StaffingTypes.ILocation_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Name: string;
        Location_Type_Reference: Array<StaffingTypes.ILocation_Type_Reference>;
        Local_Reference: StaffingTypes.ILocal_Reference;
        Display_Language_Reference: StaffingTypes.IDisplay_Language_Reference;
        Time_Profile_Reference: StaffingTypes.ITime_Profile_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Scheduled_Weekly_Hours: totalDigits,fractionDigits;
        Address_Data: Array<StaffingTypes.IAddress_Data>;
    }
    export interface IExternal_Employee_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPayroll_Interface_Processing_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        Pay_Rate_Type_Reference: StaffingTypes.IPay_Rate_Type_Reference;
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Pay_Group_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Payroll_Entity_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        External_Employee_Type_Reference: StaffingTypes.IExternal_Employee_Type_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Payroll_File_Number: string;
    }
    export interface IInternational_Assignment_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IStart_International_Assignment_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IHost_Country_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IHome_Country_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IInternational_Assignment_Data {
        International_Assignment_Type_Reference: StaffingTypes.IInternational_Assignment_Type_Reference;
        Start_International_Assignment_Reason_Reference: StaffingTypes.IStart_International_Assignment_Reason_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expected_Assignment_End_Date: date;
        Host_Country_Reference: StaffingTypes.IHost_Country_Reference;
        Home_Country_Reference: StaffingTypes.IHome_Country_Reference;
    }
    export interface IWork_Space__Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAcademic_Pay_Setup_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Annual_Work_Period_Work_Percent_of_Year: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Annual_Work_Period_Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Annual_Work_Period_End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Disbursement_Plan_Period_Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Disbursement_Plan_Period_End_Date: date;
    }
    export interface IAssign_Employee_Collective_Agreement_Event_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICollective_Agreement_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICollective_Agreement_Factor_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICollective_Agreement_Factor_Option_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICollective_Agreement_Factor {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Order: maxLength;
        Collective_Agreement_Factor_Reference: StaffingTypes.ICollective_Agreement_Factor_Reference;
        Collective_Agreement_Factor_Option_Reference: Array<StaffingTypes.ICollective_Agreement_Factor_Option_Reference>;
    }
    export interface ICollective_Agreement_Summary_Data {
        Collective_Agreement_Data: {
            Assign_Employee_Collective_Agreement_Event_Reference: StaffingTypes.IAssign_Employee_Collective_Agreement_Event_Reference;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Effective_Date: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            End_Assignment_Date: date;
            Collective_Agreement_Data: Array<{
                Collective_Agreement_Reference: StaffingTypes.ICollective_Agreement_Reference;
                Collective_Agreement_Factor: Array<StaffingTypes.ICollective_Agreement_Factor>;
            }>;
        };
    }
    export interface IEmployee_Probation_Period_Event_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEmployee_Probation_Period_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProbation_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProbation_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEmployee_Probation_Period_Detail_Data {
        Employee_Probation_Period_Event_Reference: StaffingTypes.IEmployee_Probation_Period_Event_Reference;
        Employee_Probation_Period_Reference: StaffingTypes.IEmployee_Probation_Period_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Date: date;
        Probation_Type_Reference: StaffingTypes.IProbation_Type_Reference;
        Probation_Reason_Reference: StaffingTypes.IProbation_Reason_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Extended_End_Date: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Note: string;
    }
    export interface IEmployee_Probation_Period_Summary_Data {
        Employee_Probation_Period_Detail_Data: Array<StaffingTypes.IEmployee_Probation_Period_Detail_Data>;
    }
    export interface IManager_as_of_last_detected_manager_change_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IIntegration_ID_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IOrganization_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IOrganization_Subtype_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPrimary_Business_Site_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IOrganization_Support_Role {
        Organization_Role_Reference: StaffingTypes.IOrganization_Role_Reference;
        Organization_Role_Data: Array<{
            Worker_Reference: StaffingTypes.IWorker_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Assignment_From: string;
        }>;
    }
    export interface IOrganization_Support_Role_Data {
        Organization_Support_Role: Array<StaffingTypes.IOrganization_Support_Role>;
    }
    export interface IPosition_Organization_Data {
        Organization_Reference: StaffingTypes.IOrganization_Reference;
        Organization_Data: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Organization_Reference_ID: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Organization_Code: string;
            Integration_ID_Data: Array<StaffingTypes.IIntegration_ID_Data>;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Organization_Name: string;
            Organization_Type_Reference: StaffingTypes.IOrganization_Type_Reference;
            Organization_Subtype_Reference: StaffingTypes.IOrganization_Subtype_Reference;
            Primary_Business_Site_Reference: StaffingTypes.IPrimary_Business_Site_Reference;
            Organization_Support_Role_Data: StaffingTypes.IOrganization_Support_Role_Data;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Date_of_Pay_Group_Assignment: date;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Used_in_Change_Organization_Assignments: boolean;
        };
    }
    export interface IOriginal_Pay_Group_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProposed_Pay_Group_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPay_Group_Assignment_Correct_or_Rescind_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        /** urn:com.workday/bsvc#xsd:dateTime(undefined) */
        Completed_On: dateTime;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Event_Corrected: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Event_Rescinded: boolean;
        Original_Pay_Group_Reference: StaffingTypes.IOriginal_Pay_Group_Reference;
        Proposed_Pay_Group_Reference: StaffingTypes.IProposed_Pay_Group_Reference;
    }
    export interface IPosition_Organizations_Data {
        Position_Organization_Data: Array<StaffingTypes.IPosition_Organization_Data>;
        Pay_Group_Assignment_Correct_or_Rescind_Data: Array<StaffingTypes.IPay_Group_Assignment_Correct_or_Rescind_Data>;
    }
    export interface IManager_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IManager {
        Worker_Reference: StaffingTypes.IWorker_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Worker_Descriptor: string;
    }
    export interface IPosition_Supervisory_Management_Chain_Data {
        Management_Chain_Data: Array<{
            Organization_Reference: StaffingTypes.IOrganization_Reference;
            Manager_Reference: Array<StaffingTypes.IManager_Reference>;
            Manager: StaffingTypes.IManager[];
        }>;
    }
    export interface IPosition_Matrix_Management_Chain_Data {
        Management_Chain_Data: Array<{
            Organization_Reference: StaffingTypes.IOrganization_Reference;
            Manager_Reference: Array<StaffingTypes.IManager_Reference>;
            Manager: StaffingTypes.IManager[];
        }>;
    }
    export interface IPosition_Management_Chains_Data {
        Position_Supervisory_Management_Chain_Data: StaffingTypes.IPosition_Supervisory_Management_Chain_Data;
        Position_Matrix_Management_Chain_Data: StaffingTypes.IPosition_Matrix_Management_Chain_Data;
    }
    export interface IWorker_Job_Data {
        Position_Data: {
            Position_Reference: StaffingTypes.IPosition_Reference;
            Headcount_Reference: StaffingTypes.IHeadcount_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Position_ID: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Position_Title: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Business_Title: string;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Start_Date: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            End_Employment_Date: date;
            End_Employment_Reason_Reference: Array<StaffingTypes.IEnd_Employment_Reason_Reference>;
            Worker_Type_Reference: StaffingTypes.IWorker_Type_Reference;
            Position_Time_Type_Reference: StaffingTypes.IPosition_Time_Type_Reference;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Job_Exempt: boolean;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Scheduled_Weekly_Hours: totalDigits,fractionDigits;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Default_Weekly_Hours: totalDigits,minInclusive,fractionDigits;
            Working_Time_Frequency_Reference: StaffingTypes.IWorking_Time_Frequency_Reference;
            Working_Time_Unit_Reference: StaffingTypes.IWorking_Time_Unit_Reference;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Working_Time_Value: totalDigits,minInclusive,fractionDigits;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Full_Time_Equivalent_Percentage: totalDigits,minInclusive,fractionDigits;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Specify_Paid_FTE: boolean;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Paid_FTE: totalDigits,minInclusive,fractionDigits;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Specify_Working_FTE: boolean;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Working_FTE: totalDigits,minInclusive,fractionDigits;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Exclude_from_Headcount: boolean;
            Pay_Rate_Type_Reference: StaffingTypes.IPay_Rate_Type_Reference;
            Job_Classification_Summary_Data: Array<StaffingTypes.IJob_Classification_Summary_Data>;
            Company_Insider_Reference: Array<StaffingTypes.ICompany_Insider_Reference>;
            Work_Shift_Reference: StaffingTypes.IWork_Shift_Reference;
            Work_Hours_Profiles_Reference: StaffingTypes.IWork_Hours_Profiles_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Federal_Withholding_FEIN: string;
            Worker_Compensation_Code_Data: Array<StaffingTypes.IWorker_Compensation_Code_Data>;
            Position_Payroll_Reporting_Code_Data: Array<StaffingTypes.IPosition_Payroll_Reporting_Code_Data>;
            Job_Profile_Summary_Data: StaffingTypes.IJob_Profile_Summary_Data;
            Business_Site_Summary_Data: StaffingTypes.IBusiness_Site_Summary_Data;
            Payroll_Interface_Processing_Data: StaffingTypes.IPayroll_Interface_Processing_Data;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Regular_Paid_Equivalent_Hours: totalDigits,minInclusive,fractionDigits;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Worker_Hours_Profile_Classification: maxLength;
            International_Assignment_Data: StaffingTypes.IInternational_Assignment_Data;
            Work_Space__Reference: StaffingTypes.IWork_Space__Reference;
            Academic_Pay_Setup_Data: StaffingTypes.IAcademic_Pay_Setup_Data;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            End_Date: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Pay_Through_Date: date;
            Collective_Agreement_Summary_Data: Array<StaffingTypes.ICollective_Agreement_Summary_Data>;
            Employee_Probation_Period_Summary_Data: StaffingTypes.IEmployee_Probation_Period_Summary_Data;
            Manager_as_of_last_detected_manager_change_Reference: Array<StaffingTypes.IManager_as_of_last_detected_manager_change_Reference>;
        };
        Position_Organizations_Data: StaffingTypes.IPosition_Organizations_Data;
        Position_Management_Chains_Data: StaffingTypes.IPosition_Management_Chains_Data;
    }
    export interface IPrimary_Termination_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPrimary_Termination_Category_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISecondary_Termination_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISecondary_Termination_Reason_Category_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISecondary_Termination_Reasons_Data {
        Secondary_Termination_Reason_Reference: StaffingTypes.ISecondary_Termination_Reason_Reference;
        Secondary_Termination_Reason_Category_Reference: StaffingTypes.ISecondary_Termination_Reason_Category_Reference;
    }
    export interface IEligible_for_Rehire_on_Latest_Termination_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILeave_Request_Event_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILeave_Return_Event_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILeave_of_Absence_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILeave_Type_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILeave_Request_Additional_Fields {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Last_Date_for_Which_Paid: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expected_Due_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Child_s_Birth_Date: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Stillbirth_Baby_Deceased: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Date_Baby_Arrived_Home_From_Hospital: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Adoption_Placement_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Adoption_Notification_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Date_Child_Entered_Country: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Multiple_Child_Indicator: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Number_of_Babies_Adopted_Children: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Number_of_Previous_Births: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Number_of_Previous_Maternity_Leaves: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Number_of_Child_Dependents: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Single_Parent_Indicator: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Age_of_Dependent: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Work_Related: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Stop_Payment_Date: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Social_Security_Disability_Code: maxLength;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Location_During_Leave: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Caesarean_Section_Birth: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Leave_Percentage: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Week_of_Confinement: date;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Leave_Entitlement_Override: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Date_of_Recall: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Child_s_Date_of_Death: date;
    }
    export interface ILeave_Status_Data {
        Leave_Request_Event_Reference: StaffingTypes.ILeave_Request_Event_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Leave_Request_Description: string;
        Leave_Return_Event_Reference: StaffingTypes.ILeave_Return_Event_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        On_Leave: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Leave_Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Estimated_Leave_End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Leave_End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        First_Day_Of_Work: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Leave_Last_Day_of_Work: date;
        Leave_of_Absence_Type_Reference: StaffingTypes.ILeave_of_Absence_Type_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Benefits_Effect: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Payroll_Effect: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Paid_Time_Off_Accrual_Effect: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Continuous_Service_Accrual_Effect: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Stock_Vesting_Effect: boolean;
        Leave_Type_Reason_Reference: StaffingTypes.ILeave_Type_Reason_Reference;
        Leave_Request_Additional_Fields: StaffingTypes.ILeave_Request_Additional_Fields;
    }
    export interface ILinks_Back_to_Prior_Event_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILeave_Requests_Corrected_Data {
        Leave_Request_Event_Reference: StaffingTypes.ILeave_Request_Event_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Leave_Request_Description: string;
        Leave_Return_Event_Reference: StaffingTypes.ILeave_Return_Event_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        On_Leave: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Leave_Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Estimated_Leave_End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Leave_End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        First_Day_of_Work: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Leave_Last_Day_of_Work: date;
        Leave_of_Absence_Type_Reference: StaffingTypes.ILeave_of_Absence_Type_Reference;
        Links_Back_to_Prior_Event_Reference: StaffingTypes.ILinks_Back_to_Prior_Event_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Benefits_Effect: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Payroll_Effect: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Paid_Time_Off_Accrual_Effect: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Continuous_Service_Accrual_Effect: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Stock_Vesting_Effect: boolean;
        Leave_Type_Reason_Reference: StaffingTypes.ILeave_Type_Reason_Reference;
        Leave_Request_Additional_Fields: StaffingTypes.ILeave_Request_Additional_Fields;
    }
    export interface IWorker_Status_Data {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Active: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Active_Status_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Hire_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Original_Hire_Date: date;
        Hire_Reason_Reference: StaffingTypes.IHire_Reason_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Employment_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Continuous_Service_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        First_Day_of_Work: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expected_Retirement_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Retirement_Eligibility_Date: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Retired: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Retirement_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Seniority_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Severance_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Benefits_Service_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Company_Service_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Time_Off_Service_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Vesting_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Date_Entered_Workforce: date;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Days_Unemployed: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Months_Continuous_Prior_Employment: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Terminated: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Termination_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Pay_Through_Date: date;
        Primary_Termination_Reason_Reference: StaffingTypes.IPrimary_Termination_Reason_Reference;
        Primary_Termination_Category_Reference: StaffingTypes.IPrimary_Termination_Category_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Termination_Involuntary: boolean;
        Secondary_Termination_Reasons_Data: Array<StaffingTypes.ISecondary_Termination_Reasons_Data>;
        Local_Termination_Reason_Reference: StaffingTypes.ILocal_Termination_Reason_Reference;
        Eligible_for_Hire_Reference: StaffingTypes.IEligible_for_Hire_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Regrettable_Termination: boolean;
        Eligible_for_Rehire_on_Latest_Termination_Reference: StaffingTypes.IEligible_for_Rehire_on_Latest_Termination_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Hire_Rescinded: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Termination_Last_Day_of_Work: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Resignation_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Last_Date_for_Which_Paid: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expected_Date_of_Return: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Not_Returning: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Return_Unknown: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Probation_Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Probation_End_Date: date;
        Leave_Status_Data: Array<StaffingTypes.ILeave_Status_Data>;
        Leave_Requests_Corrected_Data: Array<StaffingTypes.ILeave_Requests_Corrected_Data>;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Academic_Tenure_Date: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Rehire: boolean;
    }
    export interface IWorker_Contract_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Contract_Pay_Rate: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Contract_Assignment_Details: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Contract_End_Date: date;
        Supplier_Reference: StaffingTypes.ISupplier_Reference;
    }
    export interface IHost_Countries_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IInternational_Assignment_Summary_Data {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Has_International_Assignment: boolean;
        Host_Countries_Reference: Array<StaffingTypes.IHost_Countries_Reference>;
        Home_Country_Reference: StaffingTypes.IHome_Country_Reference;
    }
    export interface IEmployment_Data {
        Worker_Job_Data: Array<StaffingTypes.IWorker_Job_Data>;
        Worker_Status_Data: StaffingTypes.IWorker_Status_Data;
        Worker_Contract_Data: StaffingTypes.IWorker_Contract_Data;
        International_Assignment_Summary_Data: StaffingTypes.IInternational_Assignment_Summary_Data;
    }
    export interface ICompensation_Guidelines_Data {
        Compensation_Package_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Compensation_Grade_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Compensation_Grade_Profile_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Compensation_Step_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Progression_Start_Date: date;
    }
    export interface ICompensation_Plan_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISalary_and_Hourly_Data {
        Compensation_Plan_Reference: StaffingTypes.ICompensation_Plan_Reference;
        Compensation_Element_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Amount: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Assignment_Effective_Date: date;
    }
    export interface IMerit_Increase_Matrix_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IVesting_Schedule_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICompensation_Matrix_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IIndividual_Target_Currency_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IFuture_Payment_Plan_Data {
        Compensation_Plan_Reference: StaffingTypes.ICompensation_Plan_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Individual_Target_Amount: totalDigits,fractionDigits;
        Individual_Target_Currency_Reference: StaffingTypes.IIndividual_Target_Currency_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Individual_Target_Payment_Date: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Comment: string;
    }
    export interface IAnnualized_Summary_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Total_Base_Pay: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Total_Salary_and_Allowances: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Primary_Compensation_Basis: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface ISummary_Data_in_Pay_Group_Frequency {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Total_Base_Pay: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Total_Salary_and_Allowances: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Primary_Compensation_Basis: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface IAnnualized_in_Reporting_Currency_Summary_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Total_Base_Pay: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Total_Salary_and_Allowances: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Primary_Compensation_Basis: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface ISummary_Data_in_Hourly_Frequency {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Total_Base_Pay: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface ICompensation_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Compensation_Effective_Date: date;
        Reason_Reference: StaffingTypes.IReason_Reference;
        Compensation_Guidelines_Data: Array<StaffingTypes.ICompensation_Guidelines_Data>;
        Salary_and_Hourly_Data: Array<StaffingTypes.ISalary_and_Hourly_Data>;
        Unit_Salary_Plan_Data: Array<{
            Compensation_Plan_Reference: StaffingTypes.ICompensation_Plan_Reference;
            Compensation_Element_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            Unit_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Per_Unit_Amount: totalDigits,fractionDigits;
            Currency_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Number_of_Units: totalDigits,minInclusive,fractionDigits;
            Frequency_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Assignment_Effective_Date: date;
        }>;
        Allowance_Plan_Data: Array<{
            Compensation_Plan_Reference: StaffingTypes.ICompensation_Plan_Reference;
            Compensation_Element_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Percent: totalDigits,minInclusive,fractionDigits;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Amount: totalDigits,fractionDigits;
            Currency_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            Frequency_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Assignment_Effective_Date: date;
        }>;
        Unit_Allowance_Plan_Data: Array<{
            Compensation_Plan_Reference: StaffingTypes.ICompensation_Plan_Reference;
            Compensation_Element_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Number_of_Units: totalDigits,minInclusive,fractionDigits;
            Unit_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            Frequency_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Per_Unit_Amount: totalDigits,fractionDigits;
            Currency_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Assignment_Effective_Date: date;
        }>;
        Bonus_Plan_Data: Array<{
            Compensation_Plan_Reference: StaffingTypes.ICompensation_Plan_Reference;
            Compensation_Element_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Individual_Target_Amount: totalDigits,fractionDigits;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Default_Target_Amount: totalDigits,fractionDigits;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Individual_Target_Percent: totalDigits,minInclusive,fractionDigits;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Default_Target_Percent: totalDigits,minInclusive,fractionDigits;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Guaranteed_Minimum: boolean;
            Currency_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            Frequency_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Percent_Assigned: totalDigits,minInclusive,fractionDigits;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Assignment_Effective_Date: date;
        }>;
        Merit_Plan_Data: Array<{
            Compensation_Plan_Reference: StaffingTypes.ICompensation_Plan_Reference;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Individual_Target_Percent: totalDigits,minInclusive,fractionDigits;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Default_Target_Percent: totalDigits,minInclusive,fractionDigits;
            Merit_Increase_Matrix_Reference: StaffingTypes.IMerit_Increase_Matrix_Reference;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Guaranteed_Minimum: boolean;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Assignment_Effective_Date: date;
        }>;
        Commission_Plan_Data: Array<{
            Compensation_Plan_Reference: StaffingTypes.ICompensation_Plan_Reference;
            Compensation_Element_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Target_Amount: totalDigits,fractionDigits;
            Currency_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            Frequency_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Draw_Amount: totalDigits,minInclusive,fractionDigits;
            Draw_Frequency_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Draw_Duration: string;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Recoverable: boolean;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Assignment_Effective_Date: date;
        }>;
        Stock_Plan_Data: Array<{
            Compensation_Plan_Reference: StaffingTypes.ICompensation_Plan_Reference;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Percent_of_Target_as_Option: totalDigits,minInclusive,fractionDigits;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Percent_of_Target_as_Stock: totalDigits,minInclusive,fractionDigits;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Target_Shares: totalDigits,minInclusive,fractionDigits;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Individual_Target_Shares: totalDigits,minInclusive,fractionDigits;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Target_Percent: totalDigits,minInclusive,fractionDigits;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Individual_Target_Amount: totalDigits,fractionDigits;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Target_Amount: totalDigits,fractionDigits;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Individual_Target_Percent: totalDigits,minInclusive,fractionDigits;
            Currency_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            Vesting_Schedule_Reference: StaffingTypes.IVesting_Schedule_Reference;
            Compensation_Matrix_Reference: StaffingTypes.ICompensation_Matrix_Reference;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Assignment_Effective_Date: date;
        }>;
        Future_Payment_Plan_Data: Array<StaffingTypes.IFuture_Payment_Plan_Data>;
        Period_Salary_Plan_Data: Array<{
            Compensation_Plan_Reference: StaffingTypes.ICompensation_Plan_Reference;
            Compensation_Element_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            Compensation_Period_Reference: StaffingTypes.ICompensation_Period_Reference;
            Currency_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Compensation_Period_Multiplier: totalDigits,minInclusive,fractionDigits;
            Frequency_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Assignment_Effective_Date: date;
        }>;
        Employee_Compensation_Summary_Data: {
            Employee_Compensation_Summary_Data: {
                /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                Total_Base_Pay: totalDigits,fractionDigits;
                /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                Total_Salary_and_Allowances: totalDigits,fractionDigits;
                /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                Primary_Compensation_Basis: totalDigits,fractionDigits;
                Currency_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
                Frequency_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
            };
            Annualized_Summary_Data: StaffingTypes.IAnnualized_Summary_Data;
            Summary_Data_in_Pay_Group_Frequency: StaffingTypes.ISummary_Data_in_Pay_Group_Frequency;
            Annualized_in_Reporting_Currency_Summary_Data: StaffingTypes.IAnnualized_in_Reporting_Currency_Summary_Data;
            Summary_Data_in_Hourly_Frequency: StaffingTypes.ISummary_Data_in_Hourly_Frequency;
        };
    }
    export interface IWorker_Organization_Data {
        Organization_Reference: StaffingTypes.IOrganization_Reference;
        Organization_Data: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Organization_Reference_ID: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Organization_Code: string;
            Integration_ID_Data: Array<StaffingTypes.IIntegration_ID_Data>;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Organization_Name: string;
            Organization_Type_Reference: StaffingTypes.IOrganization_Type_Reference;
            Organization_Subtype_Reference: StaffingTypes.IOrganization_Subtype_Reference;
            Primary_Business_Site_Reference: StaffingTypes.IPrimary_Business_Site_Reference;
            Organization_Support_Role_Data: StaffingTypes.IOrganization_Support_Role_Data;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Date_of_Pay_Group_Assignment: date;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Used_in_Change_Organization_Assignments: boolean;
        };
    }
    export interface IOrganization_Role {
        Organization_Role_Reference: StaffingTypes.IOrganization_Role_Reference;
        Organization_Role_Data: Array<{
            Role_Assigner_Reference: StaffingTypes.IRole_Assigner_Reference;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Effective_Date: date;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Assignment_From: string;
        }>;
    }
    export interface IRole_Data {
        Organization_Role_Data: {
            Organization_Role: Array<StaffingTypes.IOrganization_Role>;
        };
    }
    export interface IWorker_Supervisory_Management_Chain_Data {
        Management_Chain_Data: Array<{
            Organization_Reference: StaffingTypes.IOrganization_Reference;
            Manager_Reference: Array<StaffingTypes.IManager_Reference>;
            Manager: StaffingTypes.IManager[];
        }>;
    }
    export interface IWorker_Matrix_Management_Chain_Data {
        Management_Chain_Data: Array<{
            Organization_Reference: StaffingTypes.IOrganization_Reference;
            Manager_Reference: Array<StaffingTypes.IManager_Reference>;
            Manager: StaffingTypes.IManager[];
        }>;
    }
    export interface IEnrollment_Period_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Benefit_Program_Name: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Plan_Year: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Begin_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Date: date;
    }
    export interface IHealth_Care_Coverage_Target_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IBenefit_Coverage_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IHealth_Care_Classification_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IInsurance_Coverage_Target_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IBenefit_Provider_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IBenefit_Provider_Identifier_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IBenefit_Provider_Summary_Data {
        Benefit_Provider_Reference: StaffingTypes.IBenefit_Provider_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Benefit_Provider_Name: string;
        Benefit_Provider_Identifier_Type_Reference: StaffingTypes.IBenefit_Provider_Identifier_Type_Reference;
    }
    export interface IExternal_Integration_ID_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPay_Component_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IBenefit_Plan_Summary_Data {
        Benefit_Plan_Reference: StaffingTypes.IBenefit_Plan_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Benefit_Plan_Name: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Group_Identifier: string;
        Benefit_Coverage_Type_Reference: StaffingTypes.IBenefit_Coverage_Type_Reference;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Health_Care_Classification_Reference: StaffingTypes.IHealth_Care_Classification_Reference;
        Insurance_Coverage_Target_Reference: StaffingTypes.IInsurance_Coverage_Target_Reference;
        Benefit_Provider_Summary_Data: StaffingTypes.IBenefit_Provider_Summary_Data;
        External_Integration_ID_Data: StaffingTypes.IExternal_Integration_ID_Data;
        Pay_Component_Reference: Array<StaffingTypes.IPay_Component_Reference>;
    }
    export interface IBenefit_Election_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Coverage_Begin_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Coverage_End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Election_Coverage_Begin_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Original_Coverage_Begin_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Original_Coverage_Begin_Date_for_Benefit_Coverage_Type: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Deduction_Begin_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Deduction_End_Date: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Election_Status: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Enrollment_Signature_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Latest_Enrollment_Signature_Date: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Passive_Enrollment: boolean;
        Benefit_Plan_Summary_Data: StaffingTypes.IBenefit_Plan_Summary_Data;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Original_Plan_Enrollment_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Original_Benefit_Provider_Enrollment_Date: date;
    }
    export interface IDependent_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICOBRA_Eligibility_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICOBRA_Eligibility_Data {
        COBRA_Eligibility_Reason_Reference: StaffingTypes.ICOBRA_Eligibility_Reason_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Eligible_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Loss_of_Coverage_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Coverage_End_Date: date;
        Benefit_Plan_Reference: StaffingTypes.IBenefit_Plan_Reference;
    }
    export interface IDependent_Coverage_Data {
        Dependent_Reference: StaffingTypes.IDependent_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Original_Coverage_Begin_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Coverage_End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Original_Coverage_Begin_Date_for_Benefit_Coverage_Type: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        First_Date_Covered_by_Benefit_Plan: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        First_Date_Covered_by_Benefit_Provider: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Provider_ID: string;
        COBRA_Eligibility_Data: Array<StaffingTypes.ICOBRA_Eligibility_Data>;
    }
    export interface IHealth_Care_Coverage_Data {
        Health_Care_Coverage_Target_Reference: StaffingTypes.IHealth_Care_Coverage_Target_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Original_Coverage_Begin_Date_for_Coverage_Target: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Provider_ID: string;
        Benefit_Election_Data: StaffingTypes.IBenefit_Election_Data;
        Dependent_Coverage_Data: Array<StaffingTypes.IDependent_Coverage_Data>;
    }
    export interface IHealth_Care_Period_Data {
        Enrollment_Period_Data: StaffingTypes.IEnrollment_Period_Data;
        Health_Care_Coverage_Data: Array<StaffingTypes.IHealth_Care_Coverage_Data>;
    }
    export interface IHealth_Care_Data {
        Health_Care_Period_Data: Array<StaffingTypes.IHealth_Care_Period_Data>;
    }
    export interface IHealth_Savings_Account_Election_Info_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Coverage_Target_Name: string;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Maximum_Annual_Contribution_Amount: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface IContribution_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Contribution_Amount: totalDigits,minInclusive,fractionDigits;
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface IPayroll_Interface_Contribution_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Contribution_Amount: totalDigits,minInclusive,fractionDigits;
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface IAnnual_Contribution_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Annual_Contribution_Amount: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Prior_Contribution_Amount: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Remaining_Periods: totalDigits,minInclusive,fractionDigits;
    }
    export interface IEmployee_Contribution_Data {
        Contribution_Data: StaffingTypes.IContribution_Data;
        Payroll_Interface_Contribution_Data: StaffingTypes.IPayroll_Interface_Contribution_Data;
        Goal_Data: {
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Goal_Amount: totalDigits,minInclusive,fractionDigits;
            Frequency_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
        };
        Annual_Contribution_Data: StaffingTypes.IAnnual_Contribution_Data;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface IEmployer_Contribution_Data {
        Contribution_Data: StaffingTypes.IContribution_Data;
        Payroll_Interface_Contribution_Data: StaffingTypes.IPayroll_Interface_Contribution_Data;
        Goal_Data: {
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Goal_Amount: totalDigits,minInclusive,fractionDigits;
            Frequency_Reference: {
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                ID: string>;
            };
        };
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface IHealth_Savings_Account_Coverage_Data {
        Benefit_Election_Data: StaffingTypes.IBenefit_Election_Data;
        Health_Savings_Account_Election_Info_Data: StaffingTypes.IHealth_Savings_Account_Election_Info_Data;
        Employee_Contribution_Data: StaffingTypes.IEmployee_Contribution_Data;
        Employer_Contribution_Data: StaffingTypes.IEmployer_Contribution_Data;
    }
    export interface IHealth_Savings_Account_Period_Data {
        Enrollment_Period_Data: StaffingTypes.IEnrollment_Period_Data;
        Health_Savings_Account_Coverage_Data: Array<StaffingTypes.IHealth_Savings_Account_Coverage_Data>;
    }
    export interface IHealth_Savings_Account_Data {
        Health_Savings_Account_Period_Data: Array<StaffingTypes.IHealth_Savings_Account_Period_Data>;
    }
    export interface ISpending_Account_Coverage_Data {
        Benefit_Election_Data: StaffingTypes.IBenefit_Election_Data;
        Employee_Contribution_Data: StaffingTypes.IEmployee_Contribution_Data;
        Employer_Contribution_Data: StaffingTypes.IEmployer_Contribution_Data;
    }
    export interface ISpending_Account_Period_Data {
        Enrollment_Period_Data: StaffingTypes.IEnrollment_Period_Data;
        Spending_Account_Coverage_Data: Array<StaffingTypes.ISpending_Account_Coverage_Data>;
    }
    export interface ISpending_Account_Data {
        Spending_Account_Period_Data: Array<StaffingTypes.ISpending_Account_Period_Data>;
    }
    export interface ICoverage_Level_Value_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Coverage_Level_Value: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Buy_Up_Amount: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Guarantee_Issue_Amount: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Coverage_Level_Multiplier: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Coverage_Level_Type: string;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface IVolume_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Volume: totalDigits,minInclusive,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface IInsurance_Coverage_Level_Data {
        Coverage_Level_Value_Data: StaffingTypes.ICoverage_Level_Value_Data;
        Volume_Data: StaffingTypes.IVolume_Data;
    }
    export interface IBeneficiary_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IBeneficiary_Allocation_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Allocation_Type: string;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Amount: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Amount_Type: string;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface IBeneficiary_Designation_Data {
        Beneficiary_Reference: StaffingTypes.IBeneficiary_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Original_Coverage_Begin_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Coverage_End_Date: date;
        Beneficiary_Allocation_Data: StaffingTypes.IBeneficiary_Allocation_Data;
    }
    export interface IInsurance_Coverage_Data {
        Insurance_Coverage_Level_Data: StaffingTypes.IInsurance_Coverage_Level_Data;
        Benefit_Election_Data: StaffingTypes.IBenefit_Election_Data;
        Dependent_Coverage_Data: Array<StaffingTypes.IDependent_Coverage_Data>;
        Beneficiary_Designation_Data: Array<StaffingTypes.IBeneficiary_Designation_Data>;
    }
    export interface IInsurance_Period_Data {
        Enrollment_Period_Data: StaffingTypes.IEnrollment_Period_Data;
        Insurance_Coverage_Data: Array<StaffingTypes.IInsurance_Coverage_Data>;
    }
    export interface IInsurance_Data {
        Insurance_Period_Data: Array<StaffingTypes.IInsurance_Period_Data>;
    }
    export interface IEmployee_Contribution_Percentage_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Election_Percentage: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Contribution_Percentage_Maximum: totalDigits,minInclusive,fractionDigits;
    }
    export interface IContribution_Amount_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Contribution_Amount: totalDigits,minInclusive,fractionDigits;
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface IPayroll_Interface_Contribution_Amount_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Contribution_Amount: totalDigits,minInclusive,fractionDigits;
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface IEmployee_Contribution_Amount_Data {
        Contribution_Amount_Data: StaffingTypes.IContribution_Amount_Data;
        Payroll_Interface_Contribution_Amount_Data: StaffingTypes.IPayroll_Interface_Contribution_Amount_Data;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Contribution_Amount_Maximum: totalDigits,minInclusive,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface IEmployer_Contribution_Percentage_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Election_Percentage: totalDigits,minInclusive,fractionDigits;
    }
    export interface IEmployer_Contribution_Amount_Data {
        Contribution_Amount_Data: StaffingTypes.IContribution_Amount_Data;
        Payroll_Interface_Contribution_Amount_Data: StaffingTypes.IPayroll_Interface_Contribution_Amount_Data;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface IRetirement_Savings_Coverage_Data {
        Benefit_Election_Data: StaffingTypes.IBenefit_Election_Data;
        Employee_Contribution_Percentage_Data: StaffingTypes.IEmployee_Contribution_Percentage_Data;
        Employee_Contribution_Amount_Data: StaffingTypes.IEmployee_Contribution_Amount_Data;
        Employer_Contribution_Percentage_Data: StaffingTypes.IEmployer_Contribution_Percentage_Data;
        Employer_Contribution_Amount_Data: StaffingTypes.IEmployer_Contribution_Amount_Data;
        Beneficiary_Designation_Data: Array<StaffingTypes.IBeneficiary_Designation_Data>;
    }
    export interface IRetirement_Savings_Period_Data {
        Enrollment_Period_Data: StaffingTypes.IEnrollment_Period_Data;
        Retirement_Savings_Coverage_Data: Array<StaffingTypes.IRetirement_Savings_Coverage_Data>;
    }
    export interface IRetirement_Savings_Data {
        Retirement_Savings_Period_Data: Array<StaffingTypes.IRetirement_Savings_Period_Data>;
    }
    export interface IAdditional_Benefits_Coverage_Target_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPercent_Contribution_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Election_Percentage: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Contribution_Percentage_Maximum: totalDigits,minInclusive,fractionDigits;
    }
    export interface IAmount_Contribution_Data {
        Contribution_Amount_Data: StaffingTypes.IContribution_Amount_Data;
        Payroll_Interface_Contribution_Amount_Data: StaffingTypes.IPayroll_Interface_Contribution_Amount_Data;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Contribution_Amount_Maximum: totalDigits,minInclusive,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface IAdditional_Benefits_Coverage_Data {
        Additional_Benefits_Coverage_Target_Reference: StaffingTypes.IAdditional_Benefits_Coverage_Target_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Original_Coverage_Begin_Date_for_Coverage_Target: date;
        Benefit_Election_Data: StaffingTypes.IBenefit_Election_Data;
        Percent_Contribution_Data: StaffingTypes.IPercent_Contribution_Data;
        Amount_Contribution_Data: Array<StaffingTypes.IAmount_Contribution_Data>;
    }
    export interface IAdditional_Benefits_Period_Data {
        Enrollment_Period_Data: StaffingTypes.IEnrollment_Period_Data;
        Additional_Benefits_Coverage_Data: Array<StaffingTypes.IAdditional_Benefits_Coverage_Data>;
    }
    export interface IAdditional_Benefits_Data {
        Additional_Benefits_Period_Data: Array<StaffingTypes.IAdditional_Benefits_Period_Data>;
    }
    export interface IBenefit_Enrollment_Data {
        Health_Care_Data: StaffingTypes.IHealth_Care_Data;
        Health_Savings_Account_Data: StaffingTypes.IHealth_Savings_Account_Data;
        Spending_Account_Data: StaffingTypes.ISpending_Account_Data;
        Insurance_Data: StaffingTypes.IInsurance_Data;
        Retirement_Savings_Data: StaffingTypes.IRetirement_Savings_Data;
        Additional_Benefits_Data: StaffingTypes.IAdditional_Benefits_Data;
        COBRA_Eligibility_Data: Array<StaffingTypes.ICOBRA_Eligibility_Data>;
    }
    export interface IPlan_Eligibility_Dates_Data {
        Benefit_Plan_Reference: StaffingTypes.IBenefit_Plan_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Earliest_Eligibility_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Earliest_Contiguous_Eligibility_Date: date;
    }
    export interface IBenefit_Eligibility_Data {
        Benefit_Plan_Reference: Array<StaffingTypes.IBenefit_Plan_Reference>;
        Plan_Eligibility_Dates_Data: Array<StaffingTypes.IPlan_Eligibility_Dates_Data>;
    }
    export interface IRelated_Person_Relationship_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPerson_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICountry_of_Nationality_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICourt_Order {
        Benefit_Coverage_Type_Reference: StaffingTypes.IBenefit_Coverage_Type_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Date: date;
    }
    export interface ILives_With_Worker_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Lives_With_Worker: boolean;
    }
    export interface IHas_Health_Insurance_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Has_Health_Insurance: boolean;
    }
    export interface IAllowed_for_Tax_Deduction_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Allowed_for_Tax_Deduction: boolean;
    }
    export interface IAnnual_Income_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Annual_Income: totalDigits,minInclusive,fractionDigits;
    }
    export interface IOccupation_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Occupation: string;
    }
    export interface IDisability_Data {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Replace_All: boolean;
        Disability_Status_Information_Data: Array<{
            Disability_Status_Reference: StaffingTypes.IDisability_Status_Reference;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Delete: boolean;
            Disability_Status_Data: {
                Disability_Reference: StaffingTypes.IDisability_Reference;
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Disability_Status_Date: date;
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Date_Known: date;
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Disability_End_Date: date;
                Disability_Grade_Reference: StaffingTypes.IDisability_Grade_Reference;
            };
        }>;
    }
    export interface IDependent {
        Dependent_Reference: StaffingTypes.IDependent_Reference;
        Dependent_Data: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Dependent_ID: string;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Full-time_Student: boolean;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Student_Status_Start_Date: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Student_Status_End_Date: date;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Disabled: boolean;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Inactive_Date: date;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Dependent_for_Payroll_Purposes: boolean;
            Citizenship_Status_Reference: Array<StaffingTypes.ICitizenship_Status_Reference>;
            Country_of_Nationality_Reference: StaffingTypes.ICountry_of_Nationality_Reference;
            Country_of_Birth_Reference: StaffingTypes.ICountry_of_Birth_Reference;
            Region_of_Birth_Reference: StaffingTypes.IRegion_of_Birth_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            City_of_Birth: string;
            Court_Order: Array<StaffingTypes.ICourt_Order>;
            Lives_With_Worker_Data: Array<StaffingTypes.ILives_With_Worker_Data>;
            Has_Health_Insurance_Data: Array<StaffingTypes.IHas_Health_Insurance_Data>;
            Allowed_for_Tax_Deduction_Data: Array<StaffingTypes.IAllowed_for_Tax_Deduction_Data>;
            Annual_Income_Data: Array<StaffingTypes.IAnnual_Income_Data>;
            Occupation_Data: Array<StaffingTypes.IOccupation_Data>;
            Disability_Data: Array<StaffingTypes.IDisability_Data>;
        };
    }
    export interface IBeneficiary_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Beneficiary_ID: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Irrevocable: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Inactive_Date: date;
        Court_Order: Array<StaffingTypes.ICourt_Order>;
    }
    export interface IBeneficiary {
        Beneficiary_Reference: StaffingTypes.IBeneficiary_Reference;
        Beneficiary_Data: StaffingTypes.IBeneficiary_Data;
    }
    export interface IEmergency_Contact_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEmergency_Contact_Priority_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEmergency_Contact {
        Emergency_Contact_Reference: StaffingTypes.IEmergency_Contact_Reference;
        Emergency_Contact_Data: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Emergency_Contact_ID: string;
            Language_Reference: Array<StaffingTypes.ILanguage_Reference>;
            Emergency_Contact_Priority_Reference: StaffingTypes.IEmergency_Contact_Priority_Reference;
        };
    }
    export interface IRelated_Person {
        Related_Person_Relationship_Reference: Array<StaffingTypes.IRelated_Person_Relationship_Reference>;
        Person_Reference: StaffingTypes.IPerson_Reference;
        Personal_Data: StaffingTypes.IPersonal_Data;
        Dependent: StaffingTypes.IDependent;
        Beneficiary: StaffingTypes.IBeneficiary;
        Emergency_Contact: StaffingTypes.IEmergency_Contact;
    }
    export interface IRelated_Person_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Number_of_Payroll_Dependents: totalDigits,minInclusive,fractionDigits;
        Related_Person: Array<StaffingTypes.IRelated_Person>;
    }
    export interface IJob_History_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IJob_History_Company_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IJob_History_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Job_History_ID: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Remove_Job_History: boolean;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Job_Title: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Company: string;
        Job_History_Company_Reference: StaffingTypes.IJob_History_Company_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Date: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Responsibilities_and_Achievements: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Location: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Job_Reference: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Contact: string;
    }
    export interface IExternal_Job_History {
        Job_History_Reference: StaffingTypes.IJob_History_Reference;
        Job_History_Data: Array<StaffingTypes.IJob_History_Data>;
    }
    export interface ICompetency_Level_Behavior_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAssessed_By_Person_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICompetency {
        Competency_Level_Behavior_Reference: StaffingTypes.ICompetency_Level_Behavior_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Competency_Level_Behavior_Descriptor: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Assessment_Comment: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Assessed_On: date;
        Assessed_By_Person_Reference: StaffingTypes.IAssessed_By_Person_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Assessed_By_Worker_Descriptor: string;
        Competency_Reference: StaffingTypes.ICompetency_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Competency_Descriptor: string;
    }
    export interface ICertification {
        Certification_Reference: StaffingTypes.ICertification_Reference;
        Certification_Data: Array<{
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Certification_ID: string;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Remove_Certification: boolean;
            Certification_Reference: StaffingTypes.ICertification_Reference;
            Country_Reference: StaffingTypes.ICountry_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Certification_Name: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Issuer: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Certification_Number: string;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Issued_Date: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Expiration_Date: date;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Examination_Score: string;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Examination_Date: date;
            Specialty_Achievement_Data: Array<{
                Specialty_Reference: StaffingTypes.ISpecialty_Reference;
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Start_Date: date;
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                End_Date: date;
                Subspecialty_Reference: Array<StaffingTypes.ISubspecialty_Reference>;
            }>;
            Worker_Document_Data: Array<{
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                File_Name: maxLength;
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                Comment: string;
                /** urn:com.workday/bsvc#xsd:base64Binary(undefined) */
                File: base64Binary;
                Document_Category_Reference: StaffingTypes.IDocument_Category_Reference;
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                Content_Type: maxLength;
            }>;
        }>;
    }
    export interface ITraining_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ITraining {
        Training_Reference: StaffingTypes.ITraining_Reference;
        Training_Data: Array<{
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Training_ID: string;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Remove_Training: boolean;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Training: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Description: string;
            Training_Type_Reference: StaffingTypes.ITraining_Type_Reference;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Completion_Date: date;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Training_Duration: string;
        }>;
    }
    export interface IAward_and_Activity_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAward_and_Activity_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAward_and_Activity_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Award_and_Activity_ID: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Remove_Award_and_Activity: boolean;
        Award_and_Activity_Type_Reference: StaffingTypes.IAward_and_Activity_Type_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Title: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Sponsor_Issuer: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Date: date;
        /** urn:com.workday/bsvc#RichText(undefined) */
        Description: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        URL: string;
        Related_Position_Reference: StaffingTypes.IRelated_Position_Reference;
    }
    export interface IAward_and_Activity {
        Award_and_Activity_Reference: StaffingTypes.IAward_and_Activity_Reference;
        Award_and_Activity_Data: StaffingTypes.IAward_and_Activity_Data;
    }
    export interface IOrganization_Professional_Affiliation_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProfessional_Affiliation_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProfessional_Affiliation_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProfessional_Affiliation_Relationship_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IContact_Information_Data {
        Address_Data: Array<StaffingTypes.IAddress_Data>;
        Phone_Data: Array<StaffingTypes.IPhone_Data>;
        Email_Address_Data: Array<StaffingTypes.IEmail_Address_Data>;
        Instant_Messenger_Data: Array<StaffingTypes.IInstant_Messenger_Data>;
        Web_Address_Data: Array<StaffingTypes.IWeb_Address_Data>;
    }
    export interface IOrganization_Professional_Affiliation_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Professional_Affiliation_ID: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Remove_Professional_Affiliation: boolean;
        Professional_Affiliation_Reference: StaffingTypes.IProfessional_Affiliation_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Professional_Affiliation: string;
        Professional_Affiliation_Type_Reference: StaffingTypes.IProfessional_Affiliation_Type_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Affiliation: string;
        Professional_Affiliation_Relationship_Type_Reference: StaffingTypes.IProfessional_Affiliation_Relationship_Type_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Begin_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Date: date;
        Contact_Information_Data: Array<StaffingTypes.IContact_Information_Data>;
    }
    export interface IOrganization_Membership {
        Organization_Professional_Affiliation_Reference: StaffingTypes.IOrganization_Professional_Affiliation_Reference;
        Organization_Professional_Affiliation_Data: Array<StaffingTypes.IOrganization_Professional_Affiliation_Data>;
    }
    export interface IEducation_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISchool_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISchool_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDegree_Completed_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEducation_Attachment_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        File_Name: maxLength;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Comment: string;
        /** urn:com.workday/bsvc#xsd:base64Binary(undefined) */
        File: base64Binary;
        Document_Category_Reference: StaffingTypes.IDocument_Category_Reference;
    }
    export interface IEducation {
        Education_Reference: StaffingTypes.IEducation_Reference;
        Education_Data: Array<{
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Education_ID: string;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Remove_Education: boolean;
            Country_Reference: StaffingTypes.ICountry_Reference;
            School_Reference: StaffingTypes.ISchool_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            School_Name: string;
            School_Type_Reference: StaffingTypes.ISchool_Type_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Location: string;
            Degree_Reference: StaffingTypes.IDegree_Reference;
            Degree_Completed_Reference: StaffingTypes.IDegree_Completed_Reference;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Date_Degree_Received: date;
            Field_Of_Study_Reference: StaffingTypes.IField_Of_Study_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Grade_Average: string;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            First_Year_Attended: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Last_Year_Attended: date;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Is_Highest_Level_of_Education: boolean;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            First_Day_Attended: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Last_Day_Attended: date;
            Education_Attachment_Data: Array<StaffingTypes.IEducation_Attachment_Data>;
        }>;
    }
    export interface IExperience_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IExperience_Rating_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWork_Experience {
        Experience_Reference: StaffingTypes.IExperience_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Remove_Experience: boolean;
        Experience_Rating_Reference: StaffingTypes.IExperience_Rating_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Experience_Comment: string;
    }
    export interface ILanguage_Ability_Data {
        Language_Proficiency_Reference: StaffingTypes.ILanguage_Proficiency_Reference;
        Language_Ability_Type_Reference: StaffingTypes.ILanguage_Ability_Type_Reference;
    }
    export interface ILanguage_Ability {
        Language_Ability_Data: Array<StaffingTypes.ILanguage_Ability_Data>;
    }
    export interface IAssessed_by_Worker_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILanguage {
        Language_Reference: StaffingTypes.ILanguage_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Remove_Language: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Native_Language: boolean;
        Language_Ability: Array<StaffingTypes.ILanguage_Ability>;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Assessed_On: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Note: string;
        Assessed_by_Worker_Reference: StaffingTypes.IAssessed_by_Worker_Reference;
    }
    export interface IInternal_Project_Experience_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IInternal_Project_Experience_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Internal_Project_Experience_ID: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Remove_Internal_Project_Experience: boolean;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Internal_Project: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Description: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Date: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Project_Leader: string;
    }
    export interface IInternal_Project_Experience {
        Internal_Project_Experience_Reference: StaffingTypes.IInternal_Project_Experience_Reference;
        Internal_Project_Experience_Data: Array<StaffingTypes.IInternal_Project_Experience_Data>;
    }
    export interface IPerformance_Review_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IReview_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IReview_Template_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRating_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IOverall_Data {
        Rating_Reference: StaffingTypes.IRating_Reference;
        /** urn:com.workday/bsvc#RichText(undefined) */
        Comment: string;
    }
    export interface ISelf_Evaluation_Data {
        Overall_Data: StaffingTypes.IOverall_Data;
    }
    export interface IManager_Evaluation_Data {
        Overall_Data: StaffingTypes.IOverall_Data;
    }
    export interface IReview_Data {
        Manager_Reference: StaffingTypes.IManager_Reference;
        Review_Type_Reference: StaffingTypes.IReview_Type_Reference;
        Review_Template_Reference: StaffingTypes.IReview_Template_Reference;
        /** urn:com.workday/bsvc#xsd:dateTime(undefined) */
        Review_Initiated_Date: dateTime;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Period_Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Period_End_Date: date;
        Self_Evaluation_Data: StaffingTypes.ISelf_Evaluation_Data;
        Manager_Evaluation_Data: StaffingTypes.IManager_Evaluation_Data;
    }
    export interface IPerformance_Review_Data {
        Performance_Review_Reference: StaffingTypes.IPerformance_Review_Reference;
        Review_Data: StaffingTypes.IReview_Data;
    }
    export interface IPerformance_Improvement_Plan_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPerformance_Improvement_Plan_Data {
        Performance_Improvement_Plan_Reference: StaffingTypes.IPerformance_Improvement_Plan_Reference;
        Review_Data: StaffingTypes.IReview_Data;
    }
    export interface IDevelopment_Plan_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDevelopment_Plan_Data {
        Development_Plan_Reference: StaffingTypes.IDevelopment_Plan_Reference;
        Review_Data: StaffingTypes.IReview_Data;
    }
    export interface IDisciplinary_Action_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDisciplinary_Action_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDisciplinary_Action_Related_To_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDisciplinary_Action_Data {
        Disciplinary_Action_Reference: StaffingTypes.IDisciplinary_Action_Reference;
        Disciplinary_Action_Reason_Reference: Array<StaffingTypes.IDisciplinary_Action_Reason_Reference>;
        Disciplinary_Action_Related_To_Reference: Array<StaffingTypes.IDisciplinary_Action_Related_To_Reference>;
        Review_Data: StaffingTypes.IReview_Data;
    }
    export interface IEmployee_Review_Data {
        Performance_Review_Data: StaffingTypes.IPerformance_Review_Data;
        Performance_Improvement_Plan_Data: StaffingTypes.IPerformance_Improvement_Plan_Data;
        Development_Plan_Data: StaffingTypes.IDevelopment_Plan_Data;
        Disciplinary_Action_Data: StaffingTypes.IDisciplinary_Action_Data;
    }
    export interface IPhoto_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Filename: maxLength;
        /** urn:com.workday/bsvc#xsd:base64Binary(undefined) */
        Image: base64Binary;
    }
    export interface IWorker_Document_Detail_Data {
        Document_Category_Reference: StaffingTypes.IDocument_Category_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Filename: maxLength;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Comment: string;
        /** urn:com.workday/bsvc#xsd:base64Binary(undefined) */
        File: base64Binary;
    }
    export interface IIntegration_Field_Override_Data {
        Field_Reference: StaffingTypes.IField_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Value: string;
    }
    export interface ITransaction_Log_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ITransaction_Log_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ITransaction_Target_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ITransaction_Log_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Transaction_Log_Description: string;
        /** urn:com.workday/bsvc#xsd:dateTime(undefined) */
        Transaction_Effective_Moment: dateTime;
        /** urn:com.workday/bsvc#xsd:dateTime(undefined) */
        Transaction_Entry_Moment: dateTime;
        Transaction_Log_Type_Reference: Array<StaffingTypes.ITransaction_Log_Type_Reference>;
        Transaction_Target_Reference: Array<StaffingTypes.ITransaction_Target_Reference>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Is_Rescind_Or_Rescinded: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Is_Correction_Or_Corrected: boolean;
    }
    export interface ITransaction_Log_Entry {
        Transaction_Log_Reference: StaffingTypes.ITransaction_Log_Reference;
        Transaction_Log_Data: StaffingTypes.ITransaction_Log_Data;
    }
    export interface ITransaction_Log_Entry_Data {
        Transaction_Log_Entry: Array<StaffingTypes.ITransaction_Log_Entry>;
    }
    export interface IMain_Transaction_Data {
        Transaction_Log_Reference: StaffingTypes.ITransaction_Log_Reference;
        Transaction_Log_Data: StaffingTypes.ITransaction_Log_Data;
    }
    export interface ICorrection_Or_Rescind_Data {
        Transaction_Log_Reference: StaffingTypes.ITransaction_Log_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Transaction_Log_Description: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Is_Correction: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Is_Rescind: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Prior_Effective_Moment: date;
        /** urn:com.workday/bsvc#xsd:dateTime(undefined) */
        Transaction_Entry_Moment: dateTime;
    }
    export interface ICorrected_Or_Rescinded_Transaction_Log_Data {
        Main_Transaction_Data: Array<StaffingTypes.IMain_Transaction_Data>;
        Correction_Or_Rescind_Data: Array<StaffingTypes.ICorrection_Or_Rescind_Data>;
    }
    export interface ITransaction_Log_Corrected_And_Rescinded_Data {
        Corrected_Or_Rescinded_Transaction_Log_Data: Array<StaffingTypes.ICorrected_Or_Rescinded_Transaction_Log_Data>;
    }
    export interface IPosition_Element_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISuccession_Readiness_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICandidate_Data {
        Position_Element_Reference: StaffingTypes.IPosition_Element_Reference;
        Succession_Readiness_Reference: StaffingTypes.ISuccession_Readiness_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Top_Candidate: boolean;
        /** urn:com.workday/bsvc#RichText(undefined) */
        Notes: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Last_Updated: string;
    }
    export interface ISuccession_Profile_Data {
        Candidate_Data: Array<StaffingTypes.ICandidate_Data>;
    }
    export interface IPotential_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAchievable_Level_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRetention_Risk_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILoss_Impact_Risk_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEmployee_Potential_Data {
        Potential_Reference: StaffingTypes.IPotential_Reference;
        Achievable_Level_Reference: StaffingTypes.IAchievable_Level_Reference;
        Retention_Risk_Reference: StaffingTypes.IRetention_Risk_Reference;
        Loss_Impact_Risk_Reference: StaffingTypes.ILoss_Impact_Risk_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Notes: string;
    }
    export interface ITalent_Assessment_Data {
        Employee_Potential_Data: StaffingTypes.IEmployee_Potential_Data;
    }
    export interface IGoal_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IOrganization_Goal_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICompletion_Status_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IGoal {
        Goal_Reference: StaffingTypes.IGoal_Reference;
        Goal_Data: Array<{
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Goal_Reference_ID: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Goal: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Description: string;
            Organization_Goal_Reference: StaffingTypes.IOrganization_Goal_Reference;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Due_Date: date;
            Completion_Status_Reference: StaffingTypes.ICompletion_Status_Reference;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Completion_Date: date;
        }>;
    }
    export interface IWorker_Goal_Data {
        Goal: StaffingTypes.IGoal[];
    }
    export interface IDevelopment_Item_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICategory_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IUpdated_by_Worker_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRelates_To_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWorker_Development_Item {
        Development_Item_Reference: StaffingTypes.IDevelopment_Item_Reference;
        Development_Item_Data: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Development_Item: maxLength;
            /** urn:com.workday/bsvc#RichText(undefined) */
            Additional_Information: string;
            Category_Reference: Array<StaffingTypes.ICategory_Reference>;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Development_Item_Start_Date: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Development_Item_Completion_Date: date;
            Status_Reference: StaffingTypes.IStatus_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Status_Note: string;
            Updated_by_Worker_Reference: StaffingTypes.IUpdated_by_Worker_Reference;
            Relates_To_Reference: Array<StaffingTypes.IRelates_To_Reference>;
        };
    }
    export interface IWorker_Skill_Item {
        Skill_Reference: StaffingTypes.ISkill_Reference;
        Skill_Data: {
            Category_Reference: StaffingTypes.ICategory_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Hide_from_Candidates: boolean;
        };
    }
    export interface IEmployee_Contracts_Data {
        Employee_Contract_Data: Array<StaffingTypes.IEmployee_Contract_Data>;
    }
    export interface IExtended_Employee_Contract_Data {
        Employee_Contract_Data: Array<StaffingTypes.IEmployee_Contract_Data>;
    }
    export interface IExtended_Employee_Contracts_Data {
        Extended_Employee_Contract_Data: Array<StaffingTypes.IExtended_Employee_Contract_Data>;
    }
    export interface IRequested_By_Worker_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IFeedback_Response_Data {
        /** urn:com.workday/bsvc#RichText(undefined) */
        Feedback_Question: string;
        /** urn:com.workday/bsvc#RichText(undefined) */
        Feedback_Comment: string;
    }
    export interface IFeedback_Received {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        From: string;
        Requested_By_Worker_Reference: StaffingTypes.IRequested_By_Worker_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Feedback_Type: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Date: date;
        Feedback_Response_Data: Array<StaffingTypes.IFeedback_Response_Data>;
    }
    export interface IFeedback_Received_Data {
        Feedback_Received: Array<StaffingTypes.IFeedback_Received>;
    }
    export interface IUser_Language__Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPreferred_Communication_Language_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILocale__Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IHour_Clock_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ITime_Zone_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDefault_Display_Language_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IUser_Account_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        User_Name: string;
        User_Language__Reference: StaffingTypes.IUser_Language__Reference;
        Preferred_Communication_Language_Reference: StaffingTypes.IPreferred_Communication_Language_Reference;
        Locale__Reference: StaffingTypes.ILocale__Reference;
        Hour_Clock_Reference: StaffingTypes.IHour_Clock_Reference;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Time_Zone_Reference: StaffingTypes.ITime_Zone_Reference;
        Default_Display_Language_Reference: StaffingTypes.IDefault_Display_Language_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Simplified_View: boolean;
    }
    export interface IShort_Term_Relocation_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IShort_Term_Relocation_Area__Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILong_Term_Relocation_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILong_Term_Relocation_Area__Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRelocation_Data {
        Short_Term_Relocation_Reference: StaffingTypes.IShort_Term_Relocation_Reference;
        Short_Term_Relocation_Area__Reference: Array<StaffingTypes.IShort_Term_Relocation_Area__Reference>;
        Long_Term_Relocation_Reference: StaffingTypes.ILong_Term_Relocation_Reference;
        Long_Term_Relocation_Area__Reference: Array<StaffingTypes.ILong_Term_Relocation_Area__Reference>;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Additional_Information: string;
    }
    export interface IWilling_to_Travel_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ITravel_Amount_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ITravel_Data {
        Willing_to_Travel_Reference: StaffingTypes.IWilling_to_Travel_Reference;
        Travel_Amount_Reference: StaffingTypes.ITravel_Amount_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Travel_Additional_Information: string;
    }
    export interface IJob_Interests_Data {
        Job_Profile_Reference: Array<StaffingTypes.IJob_Profile_Reference>;
    }
    export interface ICareer_Interest_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICareer_Interests_Data {
        Career_Interest_Reference: Array<StaffingTypes.ICareer_Interest_Reference>;
        /** urn:com.workday/bsvc#RichText(undefined) */
        Career_Interests: string;
    }
    export interface ICareer_Data {
        Relocation_Data: StaffingTypes.IRelocation_Data;
        Travel_Data: StaffingTypes.ITravel_Data;
        Job_Interests_Data: StaffingTypes.IJob_Interests_Data;
        Career_Interests_Data: StaffingTypes.ICareer_Interests_Data;
    }
    export interface IProvisioning_Group_Assignment_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Provisioning_Group: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Status: string;
        /** urn:com.workday/bsvc#xsd:dateTime(undefined) */
        Last_Changed: dateTime;
    }
    export interface IAccount_Provisioning_Data {
        Provisioning_Group_Assignment_Data: Array<StaffingTypes.IProvisioning_Group_Assignment_Data>;
    }
    export interface IBackground_Check_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Status_Date: date;
        Status_Reference: StaffingTypes.IStatus_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Status_Comment: string;
    }
    export interface ITax_Authority_Form_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IContingent_Worker_Tax_Authority_Form_Type_Data {
        Tax_Authority_Form_Type_Reference: StaffingTypes.ITax_Authority_Form_Type_Reference;
    }
    export interface IWorker_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Worker_ID: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        User_ID: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Universal_ID: string;
        Personal_Data: StaffingTypes.IPersonal_Data;
        Employment_Data: StaffingTypes.IEmployment_Data;
        Compensation_Data: StaffingTypes.ICompensation_Data;
        Organization_Data: {
            Worker_Organization_Data: Array<StaffingTypes.IWorker_Organization_Data>;
        };
        Role_Data: StaffingTypes.IRole_Data;
        Management_Chain_Data: {
            Worker_Supervisory_Management_Chain_Data: StaffingTypes.IWorker_Supervisory_Management_Chain_Data;
            Worker_Matrix_Management_Chain_Data: StaffingTypes.IWorker_Matrix_Management_Chain_Data;
        };
        Benefit_Enrollment_Data: StaffingTypes.IBenefit_Enrollment_Data;
        Benefit_Eligibility_Data: StaffingTypes.IBenefit_Eligibility_Data;
        Related_Person_Data: StaffingTypes.IRelated_Person_Data;
        Qualification_Data: {
            External_Job_History: Array<StaffingTypes.IExternal_Job_History>;
            Competency: StaffingTypes.ICompetency[];
            Certification: StaffingTypes.ICertification[];
            Training: StaffingTypes.ITraining[];
            Award_and_Activity: Array<StaffingTypes.IAward_and_Activity>;
            Organization_Membership: Array<StaffingTypes.IOrganization_Membership>;
            Education: StaffingTypes.IEducation[];
            Work_Experience: Array<StaffingTypes.IWork_Experience>;
            Language: StaffingTypes.ILanguage[];
            Internal_Project_Experience: Array<StaffingTypes.IInternal_Project_Experience>;
        };
        Employee_Review_Data: StaffingTypes.IEmployee_Review_Data;
        Photo_Data: StaffingTypes.IPhoto_Data;
        Worker_Document_Data: {
            Worker_Document: Array<{
                Worker_Document_Reference: StaffingTypes.IWorker_Document_Reference;
                Worker_Document_Detail_Data: StaffingTypes.IWorker_Document_Detail_Data;
            }>;
        };
        Integration_Field_Override_Data: Array<StaffingTypes.IIntegration_Field_Override_Data>;
        Transaction_Log_Entry_Data: StaffingTypes.ITransaction_Log_Entry_Data;
        Transaction_Log_Corrected_And_Rescinded_Data: Array<StaffingTypes.ITransaction_Log_Corrected_And_Rescinded_Data>;
        Succession_Profile_Data: StaffingTypes.ISuccession_Profile_Data;
        Talent_Assessment_Data: StaffingTypes.ITalent_Assessment_Data;
        Worker_Goal_Data: StaffingTypes.IWorker_Goal_Data;
        Development_Item_Data: {
            Worker_Development_Item: Array<StaffingTypes.IWorker_Development_Item>;
        };
        Skill_Data: {
            Worker_Skill_Item: Array<StaffingTypes.IWorker_Skill_Item>;
        };
        Employee_Contracts_Data: StaffingTypes.IEmployee_Contracts_Data;
        Extended_Employee_Contracts_Data: StaffingTypes.IExtended_Employee_Contracts_Data;
        Feedback_Received_Data: StaffingTypes.IFeedback_Received_Data;
        User_Account_Data: StaffingTypes.IUser_Account_Data;
        Career_Data: StaffingTypes.ICareer_Data;
        Account_Provisioning_Data: StaffingTypes.IAccount_Provisioning_Data;
        Background_Check_Data: Array<StaffingTypes.IBackground_Check_Data>;
        Contingent_Worker_Tax_Authority_Form_Type_Data: Array<StaffingTypes.IContingent_Worker_Tax_Authority_Form_Type_Data>;
    }
    export interface IWorker {
        Worker_Reference: StaffingTypes.IWorker_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Worker_Descriptor: string;
        Universal_Identifier_Reference: StaffingTypes.IUniversal_Identifier_Reference;
        Worker_Data: StaffingTypes.IWorker_Data;
    }
    export interface IInvalid_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Invalid_Reference_ID: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Invalid_Reference_ID_Type: maxLength;
    }
    export interface IInvalid_Reference_ID_Response {
        Invalid_Reference: Array<StaffingTypes.IInvalid_Reference>;
    }
    export interface IPosition_Change_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IContingent_Worker_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAdditional_Job_Classifications_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPosition_Details_Sub_Data {
        Job_Profile_Reference: StaffingTypes.IJob_Profile_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Position_Title: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Business_Title: string;
        Location_Reference: StaffingTypes.ILocation_Reference;
        Work_Space_Reference: StaffingTypes.IWork_Space_Reference;
        Position_Time_Type_Reference: StaffingTypes.IPosition_Time_Type_Reference;
        Work_Shift_Reference: StaffingTypes.IWork_Shift_Reference;
        Work_Hours_Profile_Reference: StaffingTypes.IWork_Hours_Profile_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Default_Hours: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Scheduled_Hours: totalDigits,fractionDigits;
        Working_Time_Frequency_Reference: StaffingTypes.IWorking_Time_Frequency_Reference;
        Working_Time_Unit_Reference: StaffingTypes.IWorking_Time_Unit_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Working_Time_Value: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Specify_Paid_FTE: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Paid_FTE: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Specify_Working_FTE: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Working_FTE: totalDigits,minInclusive,fractionDigits;
        Pay_Rate_Type_Reference: StaffingTypes.IPay_Rate_Type_Reference;
        Additional_Job_Classifications_Reference: Array<StaffingTypes.IAdditional_Job_Classifications_Reference>;
        Company_Insider_Type_Reference: Array<StaffingTypes.ICompany_Insider_Type_Reference>;
        Annual_Work_Period_Reference: StaffingTypes.IAnnual_Work_Period_Reference;
        Disbursement_Plan_Period_Reference: StaffingTypes.IDisbursement_Plan_Period_Reference;
        Work_Study_Reference: StaffingTypes.IWork_Study_Reference;
        Workers__Compensation_Code_Override_Reference: StaffingTypes.IWorkers__Compensation_Code_Override_Reference;
        Position_External_ID_Data: StaffingTypes.IPosition_External_ID_Data;
    }
    export interface IContract_Details_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Contract_Pay_Rate: totalDigits,minInclusive,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Contract_Assignment_Details: string;
    }
    export interface IFilled_Position_Edit_Details_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Position_ID: string;
        Employee_Type_Reference: StaffingTypes.IEmployee_Type_Reference;
        Contingent_Worker_Type_Reference: StaffingTypes.IContingent_Worker_Type_Reference;
        Position_Details_Sub_Data: StaffingTypes.IPosition_Details_Sub_Data;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Employment_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Contract_End_Date: date;
        Contract_Details_Data: StaffingTypes.IContract_Details_Data;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_from_Headcount: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expected_Assignment_End_Date: date;
        International_Assignment_Type_Reference: StaffingTypes.IInternational_Assignment_Type_Reference;
    }
    export interface IEdit_Position_Event_Data {
        Position_Change_Reason_Reference: StaffingTypes.IPosition_Change_Reason_Reference;
        Filled_Position_Edit_Details_Data: StaffingTypes.IFilled_Position_Edit_Details_Data;
    }
    export interface IPay_Plan_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IUnit_Salary_Plan_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IUnit_Salary_Plan_Sub_Data {
        Unit_Salary_Plan_Reference: StaffingTypes.IUnit_Salary_Plan_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Per_Unit_Amount: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Default_Units: totalDigits,minInclusive,fractionDigits;
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Actual_End_Date: date;
    }
    export interface IAllowance_Plan_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAllowance_Plan_Sub_Data {
        Allowance_Plan_Reference: StaffingTypes.IAllowance_Plan_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Percent: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Amount: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Manage_by_Compensation_Basis_Override_Amount: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expected_End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Reimbursement_Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Actual_End_Date: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Fixed_for_Manage_by_Basis_Total: boolean;
    }
    export interface IUnit_Allowance_Plan_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IUnit_Allowance_Plan_Sub_Data {
        Unit_Allowance_Plan_Reference: StaffingTypes.IUnit_Allowance_Plan_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Number_of_Units: totalDigits,minInclusive,fractionDigits;
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Per_Unit_Amount: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Reimbursement_Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Actual_End_Date: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Fixed_for_Manage_by_Basis_Total: boolean;
    }
    export interface IBonus_Plan_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IBonus_Plan_Sub_Data {
        Bonus_Plan_Reference: StaffingTypes.IBonus_Plan_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Individual_Target_Amount: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Individual_Target_Percent: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Manage_by_Compensation_Basis_Override_Amount: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Guaranteed_Minimum: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Percent_Assigned: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Actual_End_Date: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Fixed_for_Manage_by_Basis_Total: boolean;
    }
    export interface IMerit_Plan_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IMerit_Plan_Sub_Data {
        Merit_Plan_Reference: StaffingTypes.IMerit_Plan_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Individual_Target_Amount: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Individual_Target_Percent: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Guaranteed_Minimum: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Actual_End_Date: date;
    }
    export interface ICommission_Plan_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICommission_Plan_Sub_Data {
        Commission_Plan_Reference: StaffingTypes.ICommission_Plan_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Target_Amount: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Draw_Amount: totalDigits,minInclusive,fractionDigits;
        Draw_Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Draw_Duration: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Recoverable: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Actual_End_Date: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Fixed_for_Manage_by_Basis_Total: boolean;
    }
    export interface IStock_Plan_Sub_Data {
        Stock_Plan_Reference: StaffingTypes.IStock_Plan_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Individual_Target_Shares: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Individual_Target_Percent: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Individual_Target_Amount: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Manage_by_Compensation_Basis_Override_Amount: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Actual_End_Date: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Fixed_for_Manage_by_Basis_Total: boolean;
    }
    export interface IRemove_Plan_Data {
        Compensation_Plan_Reference: Array<StaffingTypes.ICompensation_Plan_Reference>;
    }
    export interface IPeriod_Salary_Plan_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPeriod_Salary_Plan_Sub_Data {
        Period_Salary_Plan_Reference: StaffingTypes.IPeriod_Salary_Plan_Reference;
        Compensation_Period_Reference: StaffingTypes.ICompensation_Period_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Manage_by_Compensation_Basis_Override_Amount: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Compensation_Period_Multiplier: totalDigits,minInclusive,fractionDigits;
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Actual_End_Date: date;
    }
    export interface ICalculated_Plan_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICalculated_Plan_Sub_Data {
        Calculated_Plan_Reference: StaffingTypes.ICalculated_Plan_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Amount_Override: totalDigits,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Frequency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Actual_End_Date: date;
    }
    export interface ICalculated_Plan_Data {
        Calculated_Plan_Sub_Data: Array<StaffingTypes.ICalculated_Plan_Sub_Data>;
    }
    export interface IRequest_Compensation_Change_Data {
        Reason_Reference: StaffingTypes.IReason_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Override_Compensation_Basis_Calculation: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Primary_Compensation_Basis: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Primary_Compensation_Basis_Amount_Change: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Primary_Compensation_Basis_Percent_Change: totalDigits,fractionDigits;
        Compensation_Guidelines_Data: StaffingTypes.ICompensation_Guidelines_Data;
        Pay_Plan_Data: {
            Pay_Plan_Sub_Data: Array<{
                Pay_Plan_Reference: StaffingTypes.IPay_Plan_Reference;
                /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                Amount: totalDigits,fractionDigits;
                /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                Percent_Change: totalDigits,fractionDigits;
                /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                Amount_Change: totalDigits,fractionDigits;
                Currency_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
                Frequency_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Expected_End_Date: date;
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Actual_End_Date: date;
            }>;
        };
        Unit_Salary_Plan_Data: {
            Unit_Salary_Plan_Sub_Data: Array<StaffingTypes.IUnit_Salary_Plan_Sub_Data>;
        };
        Allowance_Plan_Data: {
            Allowance_Plan_Sub_Data: Array<StaffingTypes.IAllowance_Plan_Sub_Data>;
        };
        Unit_Allowance_Plan_Data: {
            Unit_Allowance_Plan_Sub_Data: Array<StaffingTypes.IUnit_Allowance_Plan_Sub_Data>;
        };
        Bonus_Plan_Data: {
            Bonus_Plan_Sub_Data: Array<StaffingTypes.IBonus_Plan_Sub_Data>;
        };
        Merit_Plan_Data: {
            Merit_Plan_Sub_Data: Array<StaffingTypes.IMerit_Plan_Sub_Data>;
        };
        Commission_Plan_Data: {
            Commission_Plan_Sub_Data: Array<StaffingTypes.ICommission_Plan_Sub_Data>;
        };
        Stock_Plan_Data: {
            Stock_Plan_Sub_Data: Array<StaffingTypes.IStock_Plan_Sub_Data>;
        };
        Remove_Plan_Data: Array<StaffingTypes.IRemove_Plan_Data>;
        Period_Salary_Plan_Data: {
            Period_Salary_Plan_Sub_Data: Array<StaffingTypes.IPeriod_Salary_Plan_Sub_Data>;
        };
        Calculated_Plan_Data: StaffingTypes.ICalculated_Plan_Data;
    }
    export interface IRequest_Compensation_Change_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Request_Compensation_Change_Data: StaffingTypes.IRequest_Compensation_Change_Data;
    }
    export interface ICustom_Organization_Assignment_Data {
        Custom_Organization_Assignment_Reference: StaffingTypes.ICustom_Organization_Assignment_Reference;
    }
    export interface IEdit_Assign_Organization_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Position_Organization_Assignments_Data: {
            Company_Assignments_Reference: Array<StaffingTypes.ICompany_Assignments_Reference>;
            Cost_Center_Assignments_Reference: Array<StaffingTypes.ICost_Center_Assignments_Reference>;
            Region_Assignments_Reference: Array<StaffingTypes.IRegion_Assignments_Reference>;
            Custom_Organization_Assignment_Data: Array<StaffingTypes.ICustom_Organization_Assignment_Data>;
            Fund_Assignments_Reference: Array<StaffingTypes.IFund_Assignments_Reference>;
            Grant_Assignments_Reference: Array<StaffingTypes.IGrant_Assignments_Reference>;
            Program_Assignments_Reference: Array<StaffingTypes.IProgram_Assignments_Reference>;
            Business_Unit_Assignments_Reference: Array<StaffingTypes.IBusiness_Unit_Assignments_Reference>;
            Gift_Assignments_Reference: Array<StaffingTypes.IGift_Assignments_Reference>;
        };
    }
    export interface IAdditional_Positions_for_Pay_Group_Assignment_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IExternal_Pay_Group_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPay_Frequency_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IExternal_Payroll_Employee_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IReview_Payroll_Interface_Data {
        External_Pay_Group_Reference: StaffingTypes.IExternal_Pay_Group_Reference;
        Pay_Frequency_Reference: StaffingTypes.IPay_Frequency_Reference;
        External_Payroll_Employee_Type_Reference: StaffingTypes.IExternal_Payroll_Employee_Type_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Payroll_File_Number: string;
        Review_Payroll_Interface_Event_Sub_Process: StaffingTypes.IReview_Payroll_Interface_Event_Sub_Process;
    }
    export interface IReview_Payroll_Interface_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Review_Payroll_Interface_Data: StaffingTypes.IReview_Payroll_Interface_Data;
    }
    export interface IMatrix_Organization_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAssign_Matrix_Organization_Data {
        Matrix_Organization_Reference: Array<StaffingTypes.IMatrix_Organization_Reference>;
    }
    export interface IAssign_Matrix_Organization_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Assign_Matrix_Organization_Data: StaffingTypes.IAssign_Matrix_Organization_Data;
    }
    export interface IBirth_Country_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IBirth_Region_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICitizenship_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IVisual_Survey_Ethnicity_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IMilitary_Status_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IMilitary_Service_Information_Data {
        Military_Service_Reference: StaffingTypes.IMilitary_Service_Reference;
        Military_Service_Data: {
            Military_Status_Reference: StaffingTypes.IMilitary_Status_Reference;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Military_Discharge_Date: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Military_Status_Begin_Date: date;
            Military_Service_Type_Reference: StaffingTypes.IMilitary_Service_Type_Reference;
            Military_Rank_Reference: StaffingTypes.IMilitary_Rank_Reference;
            /** urn:com.workday/bsvc#RichText(undefined) */
            Notes: string;
        };
    }
    export interface IMilitary_Information_Data {
        Military_Service_Information_Data: Array<StaffingTypes.IMilitary_Service_Information_Data>;
    }
    export interface ILGBT_Identification_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISexual_Orientation_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IGender_Identity_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPronoun_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IChange_Personal_Information_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Change_Personal_Information_Data: {
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Date_of_Birth: date;
            Birth_Country_Reference: StaffingTypes.IBirth_Country_Reference;
            Birth_Region_Reference: StaffingTypes.IBirth_Region_Reference;
            Gender_Reference: StaffingTypes.IGender_Reference;
            Disability_Information_Data: {
                Disability_Status_Information_Data: Array<{
                    Disability_Status_Reference: StaffingTypes.IDisability_Status_Reference;
                    Disability_Status_Data: {
                        Disability_Reference: StaffingTypes.IDisability_Reference;
                        /** urn:com.workday/bsvc#xsd:date(undefined) */
                        Disability_Status_Date: date;
                        /** urn:com.workday/bsvc#xsd:date(undefined) */
                        Disability_Date_Known: date;
                        /** urn:com.workday/bsvc#xsd:date(undefined) */
                        Disability_End_Date: date;
                        Disability_Grade_Reference: StaffingTypes.IDisability_Grade_Reference;
                        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                        Disability_Degree: totalDigits,minInclusive,fractionDigits;
                        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                        Disability_Remaining_Capacity: totalDigits,minInclusive,fractionDigits;
                        Disability_Certification_Authority_Reference: StaffingTypes.IDisability_Certification_Authority_Reference;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Certification_Authority: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Certified_At: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Certification_ID: string;
                        Disability_Certification_Basis_Reference: StaffingTypes.IDisability_Certification_Basis_Reference;
                        /** urn:com.workday/bsvc#xsd:date(undefined) */
                        Disability_Severity_Recognition_Date: date;
                        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                        Disability_FTE_Toward_Quota: totalDigits,minInclusive,fractionDigits;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Work_Restrictions: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Accommodations_Requested: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Accommodations_Provided: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Rehabilitation_Requested: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Rehabilitation_Provided: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Note: string;
                        Worker_Document_Reference: Array<StaffingTypes.IWorker_Document_Reference>;
                    };
                }>;
            };
            Marital_Status_Reference: StaffingTypes.IMarital_Status_Reference;
            Citizenship_Reference: Array<StaffingTypes.ICitizenship_Reference>;
            Primary_Nationality_Reference: StaffingTypes.IPrimary_Nationality_Reference;
            Additional_Nationality_Reference: Array<StaffingTypes.IAdditional_Nationality_Reference>;
            Ethnicity_Reference: Array<StaffingTypes.IEthnicity_Reference>;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Hispanic_or_Latino: boolean;
            Visual_Survey_Ethnicity_Reference: Array<StaffingTypes.IVisual_Survey_Ethnicity_Reference>;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Hispanic_or_Latino_for_Visual_Survey: boolean;
            Religion_Reference: StaffingTypes.IReligion_Reference;
            Hukou_Region_Reference: StaffingTypes.IHukou_Region_Reference;
            Hukou_Subregion_Reference: StaffingTypes.IHukou_Subregion_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Hukou_Locality: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Hukou_Postal_Code: string;
            Hukou_Type_Reference: StaffingTypes.IHukou_Type_Reference;
            Native_Region_Reference: StaffingTypes.INative_Region_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Personnel_File_Agency: string;
            Military_Information_Data: StaffingTypes.IMilitary_Information_Data;
            Political_Affiliation_Reference: StaffingTypes.IPolitical_Affiliation_Reference;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Date_of_Death: date;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            City_of_Birth: string;
            City_of_Birth_Reference: StaffingTypes.ICity_of_Birth_Reference;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Marital_Status_Date: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Last_Medical_Exam_Date: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Last_Medical_Exam_Valid_To: date;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Medical_Exam_Notes: string;
            Blood_Type_Reference: StaffingTypes.IBlood_Type_Reference;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Uses_Tobacco: boolean;
            Social_Benefits_Locality_Reference: StaffingTypes.ISocial_Benefits_Locality_Reference;
            LGBT_Identification_Reference: Array<StaffingTypes.ILGBT_Identification_Reference>;
            Sexual_Orientation_Reference: StaffingTypes.ISexual_Orientation_Reference;
            Gender_Identity_Reference: StaffingTypes.IGender_Identity_Reference;
            Pronoun_Reference: StaffingTypes.IPronoun_Reference;
            Relative_Name_Information_Data: StaffingTypes.IRelative_Name_Information_Data;
        };
    }
    export interface IGuidelines_Data {
        Compensation_Package_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Compensation_Grade_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Compensation_Grade_Profile_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Compensation_Step_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface IAllowance_Plan_Non-Unit_Based_Data {
        Allowance_Plan_Sub_Data: Array<StaffingTypes.IAllowance_Plan_Sub_Data>;
    }
    export interface IAllowance_Plan_Unit_Based_Data {
        Unit_Allowance_Plan_Sub_Data: Array<StaffingTypes.IUnit_Allowance_Plan_Sub_Data>;
    }
    export interface ICompensation_Default_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Primary_Compensation_Basis: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Primary_Compensation_Basis_Amount_Change: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Primary_Compensation_Basis_Percent_Change: totalDigits,fractionDigits;
        Guidelines_Data: StaffingTypes.IGuidelines_Data;
        Pay_Plan_Data: {
            Pay_Plan_Sub_Data: Array<{
                Pay_Plan_Reference: StaffingTypes.IPay_Plan_Reference;
                /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                Amount: totalDigits,fractionDigits;
                /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                Percent_Change: totalDigits,fractionDigits;
                /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                Amount_Change: totalDigits,fractionDigits;
                Currency_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
                Frequency_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Expected_End_Date: date;
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Actual_End_Date: date;
            }>;
        };
        Unit_Salary_Plan_Data: {
            Unit_Salary_Plan_Sub_Data: Array<StaffingTypes.IUnit_Salary_Plan_Sub_Data>;
        };
        Allowance_Plan_Non-Unit_Based_Data: StaffingTypes.IAllowance_Plan_Non-Unit_Based_Data;
        Allowance_Plan_Unit_Based_Data: StaffingTypes.IAllowance_Plan_Unit_Based_Data;
        Bonus_Plan_Data: {
            Bonus_Plan_Sub_Data: Array<StaffingTypes.IBonus_Plan_Sub_Data>;
        };
        Merit_Plan_Data: {
            Merit_Plan_Sub_Data: Array<StaffingTypes.IMerit_Plan_Sub_Data>;
        };
        Commission_Plan_Data: {
            Commission_Plan_Sub_Data: Array<StaffingTypes.ICommission_Plan_Sub_Data>;
        };
        Stock_Plan_Data: {
            Stock_Plan_Sub_Data: Array<StaffingTypes.IStock_Plan_Sub_Data>;
        };
        Period_Salary_Plan_Data: {
            Period_Salary_Plan_Sub_Data: Array<StaffingTypes.IPeriod_Salary_Plan_Sub_Data>;
        };
        Calculated_Plan_Data: StaffingTypes.ICalculated_Plan_Data;
    }
    export interface IRequest_Default_Compensation_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Compensation_Default_Data: StaffingTypes.ICompensation_Default_Data;
    }
    export interface IRemove_Retiree_Status_Details {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Retirement_Date: date;
        Reason_Reference: StaffingTypes.IReason_Reference;
    }
    export interface IRemove_Retiree_Status_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Remove_Retiree_Status_Details: StaffingTypes.IRemove_Retiree_Status_Details;
    }
    export interface ITrack_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAppointment_Identifier_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAcademic_Unit_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRank_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface INamed_Professorship_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAppointment_Specialty_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRelated_Academic_Unit_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ITenure_Home_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ITenure_Status_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAcademic_Appointment_Data {
        Academic_Appointment_Track_Reference: StaffingTypes.IAcademic_Appointment_Track_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Appointment_Track_ID: string;
        Track_Type_Reference: StaffingTypes.ITrack_Type_Reference;
        Appointment_Identifier_Reference: StaffingTypes.IAppointment_Identifier_Reference;
        Position_Reference: StaffingTypes.IPosition_Reference;
        Academic_Unit_Reference: StaffingTypes.IAcademic_Unit_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Roster_Percent: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Appointment_Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Appointment_End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Track_Start_Date_Override: date;
        Rank_Reference: StaffingTypes.IRank_Reference;
        Named_Professorship_Reference: StaffingTypes.INamed_Professorship_Reference;
        Appointment_Specialty_Reference: StaffingTypes.IAppointment_Specialty_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Constructed_Title: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Appointment_Title: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Adjusted_Title_Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Academic_Review_Date: date;
        Related_Academic_Unit_Reference: StaffingTypes.IRelated_Academic_Unit_Reference;
        Tenure_Home_Reference: StaffingTypes.ITenure_Home_Reference;
        Tenure_Status_Reference: StaffingTypes.ITenure_Status_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Probationary_End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Tenure_Award_Date: date;
    }
    export interface IUpdate_Academic_Appointment_Data {
        Reason_Reference: StaffingTypes.IReason_Reference;
        Academic_Appointee_Reference: StaffingTypes.IAcademic_Appointee_Reference;
        Academic_Appointment_Data: StaffingTypes.IAcademic_Appointment_Data;
    }
    export interface IUpdate_Academic_Appointment_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Update_Academic_Appointment_Data: StaffingTypes.IUpdate_Academic_Appointment_Data;
    }
    export interface IEdit_Position_Data {
        Worker_Reference: StaffingTypes.IWorker_Reference;
        Position_Reference: StaffingTypes.IPosition_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        Edit_Position_Event_Data: StaffingTypes.IEdit_Position_Event_Data;
        Request_Compensation_Change_Sub_Process: StaffingTypes.IRequest_Compensation_Change_Sub_Process;
        Edit_Assign_Organization_Sub_Process: StaffingTypes.IEdit_Assign_Organization_Sub_Process;
        Assign_Pay_Group_Sub_Process: {
            Business_Sub_Process_Parameters: {
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Auto_Complete: boolean;
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Skip: boolean;
                Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
                Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
            };
            Assign_Pay_Group_Data: {
                Pay_Group_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
                Additional_Positions_for_Pay_Group_Assignment_Reference: Array<StaffingTypes.IAdditional_Positions_for_Pay_Group_Assignment_Reference>;
            };
        };
        Review_Payroll_Interface_Sub_Process: StaffingTypes.IReview_Payroll_Interface_Sub_Process;
        Assign_Matrix_Organization_Sub_Process: StaffingTypes.IAssign_Matrix_Organization_Sub_Process;
        Change_Personal_Information_Sub_Process: StaffingTypes.IChange_Personal_Information_Sub_Process;
        Request_Default_Compensation_Sub_Process: StaffingTypes.IRequest_Default_Compensation_Sub_Process;
        Edit_Service_Dates_Sub_Process: StaffingTypes.IEdit_Service_Dates_Sub_Process;
        Remove_Retiree_Status_Sub_Process: StaffingTypes.IRemove_Retiree_Status_Sub_Process;
        Maintain_Employee_Contracts_Sub_Business_Process: StaffingTypes.IMaintain_Employee_Contracts_Sub_Business_Process;
        Check_Position_Budget_Sub_Process: StaffingTypes.ICheck_Position_Budget_Sub_Process;
        Update_Academic_Appointment_Sub_Process: StaffingTypes.IUpdate_Academic_Appointment_Sub_Process;
        Assign_Costing_Allocation_Sub_Process: StaffingTypes.IAssign_Costing_Allocation_Sub_Process;
        Manage_Union_Membership_Sub_Process: StaffingTypes.IManage_Union_Membership_Sub_Process;
    }
    export interface IStudent_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAcademic_Affiliate_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IJob_Requisition_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPosition_Details {
        Job_Profile_Reference: StaffingTypes.IJob_Profile_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Position_Title: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Business_Title: string;
        Location_Reference: StaffingTypes.ILocation_Reference;
        Work_Space_Reference: StaffingTypes.IWork_Space_Reference;
        Position_Time_Type_Reference: StaffingTypes.IPosition_Time_Type_Reference;
        Work_Shift_Reference: StaffingTypes.IWork_Shift_Reference;
        Work_Hours_Profile_Reference: StaffingTypes.IWork_Hours_Profile_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Default_Hours: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Scheduled_Hours: totalDigits,fractionDigits;
        Working_Time_Frequency_Reference: StaffingTypes.IWorking_Time_Frequency_Reference;
        Working_Time_Unit_Reference: StaffingTypes.IWorking_Time_Unit_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Working_Time_Value: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Specify_Paid_FTE: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Paid_FTE: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Specify_Working_FTE: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Working_FTE: totalDigits,minInclusive,fractionDigits;
        Pay_Rate_Type_Reference: StaffingTypes.IPay_Rate_Type_Reference;
        Additional_Job_Classifications_Reference: Array<StaffingTypes.IAdditional_Job_Classifications_Reference>;
        Company_Insider_Type_Reference: Array<StaffingTypes.ICompany_Insider_Type_Reference>;
        Annual_Work_Period_Reference: StaffingTypes.IAnnual_Work_Period_Reference;
        Disbursement_Plan_Period_Reference: StaffingTypes.IDisbursement_Plan_Period_Reference;
        Work_Study_Reference: StaffingTypes.IWork_Study_Reference;
        Workers__Compensation_Code_Override_Reference: StaffingTypes.IWorkers__Compensation_Code_Override_Reference;
        Position_External_ID_Data: StaffingTypes.IPosition_External_ID_Data;
    }
    export interface IHire_Employee_Event_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Employee_ID: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Position_ID: string;
        Hire_Reason_Reference: StaffingTypes.IHire_Reason_Reference;
        Employee_Type_Reference: StaffingTypes.IEmployee_Type_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        First_Day_of_Work: date;
        /** urn:com.workday/bsvc#xsd:time(undefined) */
        Time_of_Hire: time;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Continuous_Service_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Probation_Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Probation_End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Employment_End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Benefits_Service_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Company_Service_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Conversion_Position_Start_Date: date;
        Position_Details: StaffingTypes.IPosition_Details;
        Employee_External_ID_Data: StaffingTypes.IEmployee_External_ID_Data;
    }
    export interface IPropose_Compensation_for_Hire_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Primary_Compensation_Basis: totalDigits,fractionDigits;
        Compensation_Guidelines_Data: StaffingTypes.ICompensation_Guidelines_Data;
        Pay_Plan_Data: {
            Pay_Plan_Sub_Data: Array<{
                Pay_Plan_Reference: StaffingTypes.IPay_Plan_Reference;
                /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                Amount: totalDigits,fractionDigits;
                Currency_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
                Frequency_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Expected_End_Date: date;
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Actual_End_Date: date;
            }>;
        };
        Unit_Salary_Plan_Data: {
            Unit_Salary_Plan_Sub_Data: Array<StaffingTypes.IUnit_Salary_Plan_Sub_Data>;
        };
        Allowance_Plan_Data: {
            Allowance_Plan_Sub_Data: Array<StaffingTypes.IAllowance_Plan_Sub_Data>;
        };
        Unit_Allowance_Plan_Data: {
            Unit_Allowance_Plan_Sub_Data: Array<StaffingTypes.IUnit_Allowance_Plan_Sub_Data>;
        };
        Bonus_Plan_Data: {
            Bonus_Plan_Sub_Data: Array<StaffingTypes.IBonus_Plan_Sub_Data>;
        };
        Merit_Plan_Data: {
            Merit_Plan_Sub_Data: Array<StaffingTypes.IMerit_Plan_Sub_Data>;
        };
        Commission_Plan_Data: {
            Commission_Plan_Sub_Data: Array<StaffingTypes.ICommission_Plan_Sub_Data>;
        };
        Stock_Plan_Data: {
            Stock_Plan_Sub_Data: Array<StaffingTypes.IStock_Plan_Sub_Data>;
        };
        Period_Salary_Plan_Data: {
            Period_Salary_Plan_Sub_Data: Array<StaffingTypes.IPeriod_Salary_Plan_Sub_Data>;
        };
        Calculated_Plan_Data: StaffingTypes.ICalculated_Plan_Data;
    }
    export interface IPropose_Compensation_for_Hire_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Propose_Compensation_for_Hire_Data: StaffingTypes.IPropose_Compensation_for_Hire_Data;
    }
    export interface IPerson_Identification_Data {
        National_ID: Array<StaffingTypes.INational_ID>;
        Government_ID: Array<StaffingTypes.IGovernment_ID>;
        Visa_ID: Array<StaffingTypes.IVisa_ID>;
        Passport_ID: Array<StaffingTypes.IPassport_ID>;
        License_ID: Array<StaffingTypes.ILicense_ID>;
        Custom_ID: Array<StaffingTypes.ICustom_ID>;
    }
    export interface IUpdate_ID_Information_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Person_Identification_Data: Array<StaffingTypes.IPerson_Identification_Data>;
    }
    export interface IGovernment_Identification_Data {
        National_ID: Array<StaffingTypes.INational_ID>;
        Government_ID: Array<StaffingTypes.IGovernment_ID>;
    }
    export interface IEdit_Government_IDs_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Government_Identification_Data: Array<StaffingTypes.IGovernment_Identification_Data>;
    }
    export interface IPassports_and_Visas_Identification_Data {
        Passport_ID: Array<StaffingTypes.IPassport_ID>;
        Visa_ID: Array<StaffingTypes.IVisa_ID>;
    }
    export interface IEdit_Passports_and_Visas_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Passports_and_Visas_Identification_Data: Array<StaffingTypes.IPassports_and_Visas_Identification_Data>;
    }
    export interface ILicense_Identification_Data {
        License_ID: Array<StaffingTypes.ILicense_ID>;
    }
    export interface IEdit_License_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        License_Identification_Data: Array<StaffingTypes.ILicense_Identification_Data>;
    }
    export interface ICustom_Identification_Data {
        Custom_ID: Array<StaffingTypes.ICustom_ID>;
    }
    export interface IEdit_Custom_IDs_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Custom_Identification_Data: Array<StaffingTypes.ICustom_Identification_Data>;
    }
    export interface IRequest_One_Time_Payment_for_Referral_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        Reason_Reference: StaffingTypes.IReason_Reference;
    }
    export interface IGrant_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IGrant_Amount_Currency_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IIndividual_Stock_Grant_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Shares_Granted: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Grant_Percent: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Grant_Amount: totalDigits,minInclusive,fractionDigits;
        Grant_Type_Reference: StaffingTypes.IGrant_Type_Reference;
        Grant_Amount_Currency_Reference: StaffingTypes.IGrant_Amount_Currency_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Option_Pricing_Factor: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Comments: string;
        Vesting_Schedule_Reference: StaffingTypes.IVesting_Schedule_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Grant_ID: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Grant_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Vest_From_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expiration_Date: date;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Grant_Price: totalDigits,minInclusive,fractionDigits;
        Currency_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Board_Approved: boolean;
    }
    export interface IRequest_Stock_Grant_Data {
        Stock_Plan_Reference: StaffingTypes.IStock_Plan_Reference;
        Reason_Reference: StaffingTypes.IReason_Reference;
        Individual_Stock_Grant_Data: Array<StaffingTypes.IIndividual_Stock_Grant_Data>;
    }
    export interface IRequest_Stock_Grant_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Request_Stock_Grant_Data: StaffingTypes.IRequest_Stock_Grant_Data;
    }
    export interface ICreate_Workday_Account_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        User_Name: string;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Session_Timeout_Minutes: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Account_Disabled: boolean;
        /** urn:com.workday/bsvc#xsd:dateTime(undefined) */
        Account_Expiration_Date: dateTime;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Account_Locked: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Required_New_Password_At_Next_Login: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Show_User_Name_in_Browser_Window: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Display_XML_Icon_on_Reports: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Enable_Workbox: boolean;
        Locale_Reference: StaffingTypes.ILocale_Reference;
        User_Language_Reference: StaffingTypes.IUser_Language_Reference;
        Preferred_Search_Scope_Reference: StaffingTypes.IPreferred_Search_Scope_Reference;
        Delegated_Authentication_Integration_System_Reference: StaffingTypes.IDelegated_Authentication_Integration_System_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Allow_Mixed-Language_Transactions: boolean;
        Notification_Sub_Type_Configurations: Array<StaffingTypes.INotification_Sub_Type_Configurations>;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Password: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Generate_Random_Password: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exempt_from_Delegated_Authentication: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Passcode_Exempt: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Passcode_Grace_Period_Enabled: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Passcode_Grace_Period_Login_Remaining_Count: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        OpenID_Identifier: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        OpenID_Internal_Identifier: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        OpenID_Connect_Internal_Identifier: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Simplified_View: boolean;
    }
    export interface ICreate_Workday_Account_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Create_Workday_Account_Data: StaffingTypes.ICreate_Workday_Account_Data;
    }
    export interface ICreate_Provisioning_Event_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
    }
    export interface ILife_Event_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICreate_Benefit_Life_Event_Data {
        Life_Event_Type_Reference: StaffingTypes.ILife_Event_Type_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Life_Event_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Submit_Elections_By: date;
    }
    export interface ICreate_Benefit_Life_Event_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Create_Benefit_Life_Event_Data: StaffingTypes.ICreate_Benefit_Life_Event_Data;
    }
    export interface IEdit_Background_Check_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Status_Date: date;
        Status_Reference: StaffingTypes.IStatus_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Status_Comment: string;
    }
    export interface IEdit_Background_Check_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Edit_Background_Check_Data: StaffingTypes.IEdit_Background_Check_Data;
    }
    export interface IPerson_Name_Data {
        Legal_Name_Data: StaffingTypes.ILegal_Name_Data;
        Preferred_Name_Data: StaffingTypes.IPreferred_Name_Data;
        Additional_Name_Data: Array<StaffingTypes.IAdditional_Name_Data>;
    }
    export interface INationality_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPerson_Photo_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Filename: maxLength;
        /** urn:com.workday/bsvc#xsd:base64Binary(undefined) */
        File: base64Binary;
    }
    export interface ILocation_Contexts_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICreate_Academic_Affiliate_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
        Person_Name_Data: StaffingTypes.IPerson_Name_Data;
        Contact_Information_Data: StaffingTypes.IContact_Information_Data;
        Personal_Information_Data: {
            Gender_Reference: StaffingTypes.IGender_Reference;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Date_of_Birth: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Date_of_Death: date;
            Birth_Country_Reference: StaffingTypes.IBirth_Country_Reference;
            Birth_Region_Reference: StaffingTypes.IBirth_Region_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            City_of_Birth: string;
            Marital_Status_Reference: StaffingTypes.IMarital_Status_Reference;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Marital_Status_Date: date;
            Ethnicity_Reference: Array<StaffingTypes.IEthnicity_Reference>;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Hispanic_or_Latino: boolean;
            Religion_Reference: StaffingTypes.IReligion_Reference;
            Citizenship_Reference: Array<StaffingTypes.ICitizenship_Reference>;
            Nationality_Reference: StaffingTypes.INationality_Reference;
            Hukou_Region_Reference: StaffingTypes.IHukou_Region_Reference;
            Hukou_Subregion_Reference: StaffingTypes.IHukou_Subregion_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Hukou_Locality: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Hukou_Postal_Code: string;
            Hukou_Type_Reference: StaffingTypes.IHukou_Type_Reference;
            Native_Region_Reference: StaffingTypes.INative_Region_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Personnel_File_Agency: string;
            Political_Affiliation_Reference: StaffingTypes.IPolitical_Affiliation_Reference;
            Social_Benefits_Locality_Reference: StaffingTypes.ISocial_Benefits_Locality_Reference;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Last_Medical_Exam_Date: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Last_Medical_Exam_Valid_To: date;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Medical_Exam_Notes: string;
            Disability_Information_Data: Array<{
                Disability_Status_Information_Data: Array<{
                    Disability_Status_Reference: StaffingTypes.IDisability_Status_Reference;
                    Disability_Status_Data: {
                        Disability_Reference: StaffingTypes.IDisability_Reference;
                        /** urn:com.workday/bsvc#xsd:date(undefined) */
                        Disability_Status_Date: date;
                        /** urn:com.workday/bsvc#xsd:date(undefined) */
                        Disability_Date_Known: date;
                        /** urn:com.workday/bsvc#xsd:date(undefined) */
                        Disability_End_Date: date;
                        Disability_Grade_Reference: StaffingTypes.IDisability_Grade_Reference;
                        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                        Disability_Degree: totalDigits,minInclusive,fractionDigits;
                        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                        Disability_Remaining_Capacity: totalDigits,minInclusive,fractionDigits;
                        Disability_Certification_Authority_Reference: StaffingTypes.IDisability_Certification_Authority_Reference;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Authority: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Certified_At: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Certification_ID: string;
                        Disability_Certification_Basis_Reference: StaffingTypes.IDisability_Certification_Basis_Reference;
                        /** urn:com.workday/bsvc#xsd:date(undefined) */
                        Disability_Severity_Recognition_Date: date;
                        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                        Disability_FTE_Toward_Quota: totalDigits,minInclusive,fractionDigits;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Work_Restrictions: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Accommodations_Requested: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Accommodations_Provided: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Rehabilitation_Requested: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Disability_Rehabilitation_Provided: string;
                        /** urn:com.workday/bsvc#xsd:string(undefined) */
                        Note: string;
                        Worker_Document_Reference: Array<StaffingTypes.IWorker_Document_Reference>;
                    };
                }>;
            }>;
            Military_Information_Data: Array<StaffingTypes.IMilitary_Information_Data>;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Uses_Tobacco: boolean;
        };
        Person_Identification_Data: StaffingTypes.IPerson_Identification_Data;
        Person_Photo_Data: StaffingTypes.IPerson_Photo_Data;
        Location_Contexts_Reference: Array<StaffingTypes.ILocation_Contexts_Reference>;
    }
    export interface ICreate_Workday_Account_Sub_Business_Process_for_Academic_Affiliate {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Create_Workday_Account_Data: StaffingTypes.ICreate_Workday_Account_Data;
    }
    export interface IRole_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISource_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProfessional_Affiliation {
        Organization_Professional_Affiliation_Reference: StaffingTypes.IOrganization_Professional_Affiliation_Reference;
        Organization_Professional_Affiliation_Data: Array<StaffingTypes.IOrganization_Professional_Affiliation_Data>;
    }
    export interface IManage_Professional_Affiliation_Data {
        Role_Reference: StaffingTypes.IRole_Reference;
        Source_Reference: StaffingTypes.ISource_Reference;
        Professional_Affiliation: Array<StaffingTypes.IProfessional_Affiliation>;
    }
    export interface IManage_Professional_Affiliation_Sub_Business_Process_for_Academic_Affiliate {
        Business_Sub_Process_Parameters: Array<{
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        }>;
        Manage_Professional_Affiliation_Data: Array<StaffingTypes.IManage_Professional_Affiliation_Data>;
    }
    export interface IManage_Education_Data {
        Role_Reference: StaffingTypes.IRole_Reference;
        Source_Reference: StaffingTypes.ISource_Reference;
        Education: StaffingTypes.IEducation[];
    }
    export interface IManage_Education_Sub_Business_Process_for_Academic_Affiliate {
        Business_Sub_Process_Parameters: Array<{
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        }>;
        Manage_Education_Data: Array<StaffingTypes.IManage_Education_Data>;
    }
    export interface IAcademic_Level_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICourse_Subject_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICourse_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDelivery_Mode_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICourse_Tag_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEducational_Taxonomy_Code_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IInstructor_Eligibility_Line_Data {
        Academic_Unit_Reference: StaffingTypes.IAcademic_Unit_Reference;
        Academic_Level_Reference: Array<StaffingTypes.IAcademic_Level_Reference>;
        Course_Subject_Reference: Array<StaffingTypes.ICourse_Subject_Reference>;
        Course_Reference: Array<StaffingTypes.ICourse_Reference>;
        Delivery_Mode_Reference: Array<StaffingTypes.IDelivery_Mode_Reference>;
        Course_Tag_Reference: Array<StaffingTypes.ICourse_Tag_Reference>;
        Location_Reference: Array<StaffingTypes.ILocation_Reference>;
        Educational_Taxonomy_Code_Reference: Array<StaffingTypes.IEducational_Taxonomy_Code_Reference>;
    }
    export interface IManage_Instructor_Eligibility_Sub_Business_Process_for_Academic_Affiliate {
        Business_Sub_Process_Parameters: Array<{
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        }>;
        Instructor_Eligibility_Line_Data: Array<StaffingTypes.IInstructor_Eligibility_Line_Data>;
    }
    export interface IAdd_Academic_Appointment_Data {
        Reason_Reference: StaffingTypes.IReason_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Add_Academic_Affiliate_Status: boolean;
        Academic_Appointee_Reference: StaffingTypes.IAcademic_Appointee_Reference;
        Create_Academic_Affiliate_Data: StaffingTypes.ICreate_Academic_Affiliate_Data;
        Academic_Appointment_Data: StaffingTypes.IAcademic_Appointment_Data;
        Create_Workday_Account_Sub_Business_Process_for_Academic_Affiliate: StaffingTypes.ICreate_Workday_Account_Sub_Business_Process_for_Academic_Affiliate;
        Manage_Professional_Affiliation_Sub_Business_Process_for_Academic_Affiliate: Array<StaffingTypes.IManage_Professional_Affiliation_Sub_Business_Process_for_Academic_Affiliate>;
        Manage_Education_Sub_Business_Process_for_Academic_Affiliate: Array<StaffingTypes.IManage_Education_Sub_Business_Process_for_Academic_Affiliate>;
        Manage_Instructor_Eligibility_Sub_Business_Process_for_Academic_Affiliate: Array<StaffingTypes.IManage_Instructor_Eligibility_Sub_Business_Process_for_Academic_Affiliate>;
    }
    export interface IAdd_Academic_Appointment_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Add_Academic_Appointment_Data: StaffingTypes.IAdd_Academic_Appointment_Data;
    }
    export interface ICollective_Agreement_Factor_1_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICollective_Agreement_Factor_Option_1_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICollective_Agreement_Factor_1_Data {
        Collective_Agreement_Factor_1_Reference: StaffingTypes.ICollective_Agreement_Factor_1_Reference;
        Collective_Agreement_Factor_Option_1_Reference: StaffingTypes.ICollective_Agreement_Factor_Option_1_Reference;
    }
    export interface ICollective_Agreement_Factor_2_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICollective_Agreement_Factor_Option_2_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICollective_Agreement_Factor_2_Data {
        Collective_Agreement_Factor_2_Reference: StaffingTypes.ICollective_Agreement_Factor_2_Reference;
        Collective_Agreement_Factor_Option_2_Reference: StaffingTypes.ICollective_Agreement_Factor_Option_2_Reference;
    }
    export interface ICollective_Agreement_Factor_3_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICollective_Agreement_Factor_Option_3_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICollective_Agreement_Factor_3_Data {
        Collective_Agreement_Factor_3_Reference: StaffingTypes.ICollective_Agreement_Factor_3_Reference;
        Collective_Agreement_Factor_Option_3_Reference: StaffingTypes.ICollective_Agreement_Factor_Option_3_Reference;
    }
    export interface ICollective_Agreement_Factor_4_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICollective_Agreement_Factor_Option_4_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICollective_Agreement_Factor_4_Data {
        Collective_Agreement_Factor_4_Reference: StaffingTypes.ICollective_Agreement_Factor_4_Reference;
        Collective_Agreement_Factor_Option_4_Reference: StaffingTypes.ICollective_Agreement_Factor_Option_4_Reference;
    }
    export interface ICollective_Agreement_Factor_5_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICollective_Agreement_Factor_Option_5_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICollective_Agreement_Factor_5_Data {
        Collective_Agreement_Factor_5_Reference: StaffingTypes.ICollective_Agreement_Factor_5_Reference;
        Collective_Agreement_Factor_Option_5_Reference: StaffingTypes.ICollective_Agreement_Factor_Option_5_Reference;
    }
    export interface IFactor_Options {
        Collective_Agreement_Factor_1_Data: StaffingTypes.ICollective_Agreement_Factor_1_Data;
        Collective_Agreement_Factor_2_Data: StaffingTypes.ICollective_Agreement_Factor_2_Data;
        Collective_Agreement_Factor_3_Data: StaffingTypes.ICollective_Agreement_Factor_3_Data;
        Collective_Agreement_Factor_4_Data: StaffingTypes.ICollective_Agreement_Factor_4_Data;
        Collective_Agreement_Factor_5_Data: StaffingTypes.ICollective_Agreement_Factor_5_Data;
    }
    export interface IAssign_Employee_Collective_Agreement_Data {
        Collective_Agreement_Reference: StaffingTypes.ICollective_Agreement_Reference;
        Factor_Options: StaffingTypes.IFactor_Options;
    }
    export interface IAssign_Employee_Collective_Agreement_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Assign_Employee_Collective_Agreement_Data: StaffingTypes.IAssign_Employee_Collective_Agreement_Data;
    }
    export interface IProbation_Period_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILength {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Duration: totalDigits,minInclusive,fractionDigits;
        Unit_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface IProbation_Period_Review_Length {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Schedule: totalDigits,minInclusive,fractionDigits;
        Unit_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
    }
    export interface IProbation_Review {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Derive_Probation_Period_Review_from_Rule: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Probation_Review_Date: date;
        Probation_Period_Review_Length: StaffingTypes.IProbation_Period_Review_Length;
    }
    export interface IManage_Employee_Probation_Period_Data {
        Probation_Period_Reference: StaffingTypes.IProbation_Period_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Date: date;
        Probation_Type_Reference: StaffingTypes.IProbation_Type_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Derive_Probation_Period_from_Rule: boolean;
        Length: StaffingTypes.ILength;
        Probation_Reason_Reference: StaffingTypes.IProbation_Reason_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Extended_End_Date: date;
        Probation_Review: StaffingTypes.IProbation_Review;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Note: string;
    }
    export interface IManage_Employee_Probation_Period_Sub_Business_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Manage_Employee_Probation_Period_Data: StaffingTypes.IManage_Employee_Probation_Period_Data;
    }
    export interface IEmergency_Contact_Personal_Information_Data {
        Person_Name_Data: Array<StaffingTypes.IPerson_Name_Data>;
        Contact_Information_Data: Array<StaffingTypes.IContact_Information_Data>;
    }
    export interface IEmergency_Contacts_Reference_Data {
        Emergency_Contact_Reference: StaffingTypes.IEmergency_Contact_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Delete: boolean;
        Emergency_Contact_Data: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Emergency_Contact_ID: string;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Primary: boolean;
            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
            Priority: totalDigits,fractionDigits;
            Related_Person_Relationship_Reference: Array<StaffingTypes.IRelated_Person_Relationship_Reference>;
            Language_Reference: Array<StaffingTypes.ILanguage_Reference>;
            Emergency_Contact_Personal_Information_Data: StaffingTypes.IEmergency_Contact_Personal_Information_Data;
        };
    }
    export interface IChange_Emergency_Contacts_Data {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Replace_All: boolean;
        Emergency_Contacts_Reference_Data: Array<StaffingTypes.IEmergency_Contacts_Reference_Data>;
    }
    export interface IEmergency_Contacts_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Change_Emergency_Contacts_Data: StaffingTypes.IChange_Emergency_Contacts_Data;
    }
    export interface IOnboarding_Setup_Template_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IOnboarding_Setup_Data {
        Onboarding_Setup_Template_Reference: StaffingTypes.IOnboarding_Setup_Template_Reference;
    }
    export interface IOnboarding_Setup_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Onboarding_Setup_Data: StaffingTypes.IOnboarding_Setup_Data;
    }
    export interface IStudent_Employment_Eligibility_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
    }
    export interface IAdjustment_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IOverride_Notice_Period_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Duration: totalDigits,minInclusive,fractionDigits;
        Unit_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Adjustment_Reference: StaffingTypes.IAdjustment_Reference;
    }
    export interface IEdit_Notice_Periods_Data {
        Employer_Notice_Period_Data: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Derive_Notice_Period: boolean;
            Override_Notice_Period_Data: StaffingTypes.IOverride_Notice_Period_Data;
        };
        Employee_Notice_Period_Data: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Derive_Notice_Period: boolean;
            Override_Notice_Period_Data: StaffingTypes.IOverride_Notice_Period_Data;
        };
    }
    export interface IEdit_Notice_Periods_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Edit_Notice_Periods_Data: StaffingTypes.IEdit_Notice_Periods_Data;
    }
    export interface IHire_Employee_Data {
        Applicant_Reference: StaffingTypes.IApplicant_Reference;
        Former_Worker_Reference: StaffingTypes.IFormer_Worker_Reference;
        Student_Reference: StaffingTypes.IStudent_Reference;
        Academic_Affiliate_Reference: StaffingTypes.IAcademic_Affiliate_Reference;
        Applicant_Data: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Applicant_ID: string;
            Personal_Data: StaffingTypes.IPersonal_Data;
            External_Integration_ID_Data: StaffingTypes.IExternal_Integration_ID_Data;
        };
        Organization_Reference: StaffingTypes.IOrganization_Reference;
        Position_Reference: StaffingTypes.IPosition_Reference;
        Job_Requisition_Reference: StaffingTypes.IJob_Requisition_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Hire_Date: date;
        Hire_Employee_Event_Data: StaffingTypes.IHire_Employee_Event_Data;
        Propose_Compensation_for_Hire_Sub_Process: StaffingTypes.IPropose_Compensation_for_Hire_Sub_Process;
        Update_ID_Information_Sub_Process: StaffingTypes.IUpdate_ID_Information_Sub_Process;
        Edit_Government_IDs_Sub_Process: StaffingTypes.IEdit_Government_IDs_Sub_Process;
        Edit_Passports_and_Visas_Sub_Process: StaffingTypes.IEdit_Passports_and_Visas_Sub_Process;
        Edit_License_Sub_Process: StaffingTypes.IEdit_License_Sub_Process;
        Edit_Custom_IDs_Sub_Process: StaffingTypes.IEdit_Custom_IDs_Sub_Process;
        Edit_Assign_Organization_Sub_Process: StaffingTypes.IEdit_Assign_Organization_Sub_Process;
        Assign_Pay_Group_Sub_Process: {
            Business_Sub_Process_Parameters: {
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Auto_Complete: boolean;
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Skip: boolean;
                Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
                Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
            };
            Assign_Pay_Group_Data: {
                Pay_Group_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
                Additional_Positions_for_Pay_Group_Assignment_Reference: Array<StaffingTypes.IAdditional_Positions_for_Pay_Group_Assignment_Reference>;
            };
        };
        Review_Payroll_Interface_Sub_Process: StaffingTypes.IReview_Payroll_Interface_Sub_Process;
        Request_One_Time_Payment_Sub_Process: StaffingTypes.IRequest_One_Time_Payment_Sub_Process;
        Request_One_Time_Payment_for_Referral_Sub_Process: StaffingTypes.IRequest_One_Time_Payment_for_Referral_Sub_Process;
        Request_Stock_Grant_Sub_Process: StaffingTypes.IRequest_Stock_Grant_Sub_Process;
        Create_Workday_Account_Sub_Process: StaffingTypes.ICreate_Workday_Account_Sub_Process;
        Assign_Matrix_Organization_Sub_Process: StaffingTypes.IAssign_Matrix_Organization_Sub_Process;
        Change_Personal_Information_Sub_Process: StaffingTypes.IChange_Personal_Information_Sub_Process;
        Create_Provisioning_Event_Sub_Process: StaffingTypes.ICreate_Provisioning_Event_Sub_Process;
        Create_Benefit_Life_Event_Sub_Process: StaffingTypes.ICreate_Benefit_Life_Event_Sub_Process;
        Maintain_Employee_Contracts_Sub_Business_Process: StaffingTypes.IMaintain_Employee_Contracts_Sub_Business_Process;
        Edit_Service_Dates_Sub_Process: StaffingTypes.IEdit_Service_Dates_Sub_Process;
        Remove_Retiree_Status_Sub_Process: StaffingTypes.IRemove_Retiree_Status_Sub_Process;
        Check_Position_Budget_Sub_Process: StaffingTypes.ICheck_Position_Budget_Sub_Process;
        Assign_Costing_Allocation_Sub_Process: StaffingTypes.IAssign_Costing_Allocation_Sub_Process;
        Edit_Background_Check_Sub_Process: StaffingTypes.IEdit_Background_Check_Sub_Process;
        Add_Academic_Appointment_Sub_Process: StaffingTypes.IAdd_Academic_Appointment_Sub_Process;
        Assign_Employee_Collective_Agreement_Sub_Process: StaffingTypes.IAssign_Employee_Collective_Agreement_Sub_Process;
        Manage_Employee_Probation_Period_Sub_Business_Process: StaffingTypes.IManage_Employee_Probation_Period_Sub_Business_Process;
        Emergency_Contacts_Sub_Process: StaffingTypes.IEmergency_Contacts_Sub_Process;
        Onboarding_Setup_Sub_Process: StaffingTypes.IOnboarding_Setup_Sub_Process;
        Student_Employment_Eligibility_Sub_Process: StaffingTypes.IStudent_Employment_Eligibility_Sub_Process;
        Manage_Union_Membership_Sub_Process: StaffingTypes.IManage_Union_Membership_Sub_Process;
        Edit_Notice_Periods_Sub_Process: StaffingTypes.IEdit_Notice_Periods_Sub_Process;
    }
    export interface IEligible_For_Hire_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IApplicant_Has_Marked_as_No_Show_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IApplicant_Source_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IReferred_by_Worker_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPositions_Considered_for_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRecruiting_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Applicant_Entered_Date: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Applicant_Comments: string;
        Eligible_For_Hire_Reference: StaffingTypes.IEligible_For_Hire_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Eligible_for_Rehire_Comments: string;
        Applicant_Has_Marked_as_No_Show_Reference: StaffingTypes.IApplicant_Has_Marked_as_No_Show_Reference;
        Applicant_Source_Reference: StaffingTypes.IApplicant_Source_Reference;
        Referred_by_Worker_Reference: Array<StaffingTypes.IReferred_by_Worker_Reference>;
        Positions_Considered_for_Reference: Array<StaffingTypes.IPositions_Considered_for_Reference>;
    }
    export interface IResume_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IResume {
        Resume_Reference: StaffingTypes.IResume_Reference;
        Resume_Data: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            File_ID: string;
            /** urn:com.workday/bsvc#xsd:base64Binary(undefined) */
            File: base64Binary;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            FileName: maxLength;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Comments: string;
        };
    }
    export interface IDocument_Field_Result_Data {
        Field_Reference: StaffingTypes.IField_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Value: string;
    }
    export interface IFund_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IGrant_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProgram_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IBusiness_Unit_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IGift_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAssign_Organization_Data {
        Position_Reference: StaffingTypes.IPosition_Reference;
        Worker_Reference: StaffingTypes.IWorker_Reference;
        Organization_Reference: Array<StaffingTypes.IOrganization_Reference>;
        Fund_Reference: Array<StaffingTypes.IFund_Reference>;
        Grant_Reference: Array<StaffingTypes.IGrant_Reference>;
        Program_Reference: Array<StaffingTypes.IProgram_Reference>;
        Business_Unit_Reference: Array<StaffingTypes.IBusiness_Unit_Reference>;
        Gift_Reference: Array<StaffingTypes.IGift_Reference>;
        Check_Position_Budget_Sub_Process: StaffingTypes.ICheck_Position_Budget_Sub_Process;
    }
    export interface IContingent_Worker_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEnd_Contract_Event_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Last_Day_of_Work: date;
        Primary_Reason_Reference: StaffingTypes.IPrimary_Reason_Reference;
        Secondary_Reason_Reference: Array<StaffingTypes.ISecondary_Reason_Reference>;
        Local_Termination_Reason_Reference: StaffingTypes.ILocal_Termination_Reason_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Notify_Worker_By_Date: date;
        Regrettable_Reference: StaffingTypes.IRegrettable_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Close_Position: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Job_Overlap_Allowed: boolean;
    }
    export interface IEnd_Contingent_Worker_Contract_Data {
        Contingent_Worker_Reference: StaffingTypes.IContingent_Worker_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Contract_End_Date: date;
        End_Contract_Event_Data: StaffingTypes.IEnd_Contract_Event_Data;
        Assign_Organization_Roles_Sub_Process: StaffingTypes.IAssign_Organization_Roles_Sub_Process;
        Create_Job_Requisition_Sub_Process: Array<StaffingTypes.ICreate_Job_Requisition_Sub_Process>;
    }
    export interface IContract_Worker_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IContract_Worker_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDefault_Payment_Term_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPurchase_Order_Contract_Details_Data {
        Company_for_Purchase_Order_Reference: StaffingTypes.ICompany_for_Purchase_Order_Reference;
        Requester_Reference: StaffingTypes.IRequester_Reference;
        Spend_Category_Reference: StaffingTypes.ISpend_Category_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Contract_Amount: totalDigits,minInclusive,fractionDigits;
        Worktags_Reference: Array<StaffingTypes.IWorktags_Reference>;
    }
    export interface IContingent_Worker_External_ID_Data {
        External_ID: Array<StaffingTypes.IExternal_ID>;
    }
    export interface IContract_Contingent_Worker_Event_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Contingent_Worker_ID: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Position_ID: string;
        Contract_Worker_Reason_Reference: StaffingTypes.IContract_Worker_Reason_Reference;
        Contract_Worker_Type_Reference: StaffingTypes.IContract_Worker_Type_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Create_Purchase_Order: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Contract_End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        First_Day_of_Work: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Conversion_Position_Start_Date: date;
        Supplier_Reference: StaffingTypes.ISupplier_Reference;
        Default_Payment_Term_Reference: StaffingTypes.IDefault_Payment_Term_Reference;
        Position_Details: StaffingTypes.IPosition_Details;
        Contract_Details_Data: Array<StaffingTypes.IContract_Details_Data>;
        Purchase_Order_Contract_Details_Data: StaffingTypes.IPurchase_Order_Contract_Details_Data;
        Contingent_Worker_External_ID_Data: StaffingTypes.IContingent_Worker_External_ID_Data;
    }
    export interface IContract_Contingent_Worker_Data {
        Applicant_Reference: StaffingTypes.IApplicant_Reference;
        Former_Worker_Reference: StaffingTypes.IFormer_Worker_Reference;
        Applicant_Data: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Applicant_ID: string;
            Personal_Data: StaffingTypes.IPersonal_Data;
            External_Integration_ID_Data: StaffingTypes.IExternal_Integration_ID_Data;
        };
        Organization_Reference: StaffingTypes.IOrganization_Reference;
        Position_Reference: StaffingTypes.IPosition_Reference;
        Job_Requisition_Reference: StaffingTypes.IJob_Requisition_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Contract_Start_Date: date;
        Contract_Contingent_Worker_Event_Data: StaffingTypes.IContract_Contingent_Worker_Event_Data;
        Update_ID_Information_Sub_Process: StaffingTypes.IUpdate_ID_Information_Sub_Process;
        Edit_Government_IDs_Sub_Process: StaffingTypes.IEdit_Government_IDs_Sub_Process;
        Edit_Passports_and_Visas_Sub_Process: StaffingTypes.IEdit_Passports_and_Visas_Sub_Process;
        Edit_License_Sub_Process: StaffingTypes.IEdit_License_Sub_Process;
        Edit_Custom_IDs_Sub_Process: StaffingTypes.IEdit_Custom_IDs_Sub_Process;
        Edit_Assign_Organization_Sub_Process: StaffingTypes.IEdit_Assign_Organization_Sub_Process;
        Create_Workday_Account_Sub_Process: StaffingTypes.ICreate_Workday_Account_Sub_Process;
        Assign_Matrix_Organization_Sub_Process: StaffingTypes.IAssign_Matrix_Organization_Sub_Process;
        Change_Personal_Information_Sub_Process: StaffingTypes.IChange_Personal_Information_Sub_Process;
        Edit_Service_Dates_Sub_Process: StaffingTypes.IEdit_Service_Dates_Sub_Process;
        Remove_Retiree_Status_Sub_Process: StaffingTypes.IRemove_Retiree_Status_Sub_Process;
        Onboarding_Setup_Sub_Process: StaffingTypes.IOnboarding_Setup_Sub_Process;
    }
    export interface IExisting_Related_Person_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDependent_Personal_Information_Data {
        Person_Name_Data: StaffingTypes.IPerson_Name_Data;
        Contact_Information_Data: StaffingTypes.IContact_Information_Data;
        Person_Identification_Data: StaffingTypes.IPerson_Identification_Data;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Date_of_Birth: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Date_of_Death: date;
        Gender_Reference: StaffingTypes.IGender_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Uses_Tobacco: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Full-Time_Student: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Student_Status_Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Student_Status_End_Date: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Disabled: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Inactive_Date: date;
    }
    export interface ICourt_Order_Replacement_Data {
        Benefit_Coverage_Type_Reference: StaffingTypes.IBenefit_Coverage_Type_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Date: date;
    }
    export interface ISupervisory_Organization_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPosition_Request_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ITime_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPosition_Worker_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPosition_Group_Restrictions_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Availability_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Earliest_Hire_Date: date;
        Job_Family_Reference: Array<StaffingTypes.IJob_Family_Reference>;
        Job_Profile_Reference: Array<StaffingTypes.IJob_Profile_Reference>;
        Location_Reference: Array<StaffingTypes.ILocation_Reference>;
        Worker_Type_Reference: StaffingTypes.IWorker_Type_Reference;
        Time_Type_Reference: StaffingTypes.ITime_Type_Reference;
        Position_Worker_Type_Reference: Array<StaffingTypes.IPosition_Worker_Type_Reference>;
    }
    export interface ICreate_Position_Data {
        Supervisory_Organization_Reference: StaffingTypes.ISupervisory_Organization_Reference;
        Position_Request_Reason_Reference: StaffingTypes.IPosition_Request_Reason_Reference;
        Position_Data: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Position_ID: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Job_Posting_Title: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Job_Description_Summary: string;
            /** urn:com.workday/bsvc#RichText(undefined) */
            Job_Description: string;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Critical_Job: boolean;
            Difficulty_to_Fill_Reference: StaffingTypes.IDifficulty_to_Fill_Reference;
        };
        Qualification_Replacement_Data: StaffingTypes.IQualification_Replacement_Data;
        Position_Group_Restrictions_Data: StaffingTypes.IPosition_Group_Restrictions_Data;
        Edit_Assign_Organization_Sub_Process: StaffingTypes.IEdit_Assign_Organization_Sub_Process;
        Request_Default_Compensation_Sub_Process: StaffingTypes.IRequest_Default_Compensation_Sub_Process;
        Assign_Pay_Group_Sub_Process: {
            Business_Sub_Process_Parameters: {
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Auto_Complete: boolean;
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Skip: boolean;
                Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
                Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
            };
            Assign_Pay_Group_Data: {
                Pay_Group_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
            };
        };
        Assign_Costing_Allocation_Sub_Process: StaffingTypes.IAssign_Costing_Allocation_Sub_Process;
    }
    export interface IPositions_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPosition_Status_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPosition_Definition_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Position_ID: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Job_Posting_Title: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Academic_Tenure_Eligible: boolean;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Job_Description_Summary: string;
        /** urn:com.workday/bsvc#RichText(undefined) */
        Job_Description: string;
        Position_Status_Reference: Array<StaffingTypes.IPosition_Status_Reference>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Available_For_Hire: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Available_for_Recruiting: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Hiring_Freeze: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Work_Shift_Required: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Available_for_Overlap: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Earliest_Overlap_Date: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Critical_Job: boolean;
        Difficulty_to_Fill_Reference: StaffingTypes.IDifficulty_to_Fill_Reference;
    }
    export interface ILocation_Context_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IJob_Profile_Exempt_Data {
        Location_Context_Reference: StaffingTypes.ILocation_Context_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Job_Exempt: boolean;
    }
    export interface IJob_Profile_Restriction_Summary_Data {
        Job_Profile_Reference: StaffingTypes.IJob_Profile_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Job_Profile_Name: string;
        Management_Level_Reference: StaffingTypes.IManagement_Level_Reference;
        Job_Category_Reference: StaffingTypes.IJob_Category_Reference;
        Job_Family_Reference: Array<StaffingTypes.IJob_Family_Reference>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Work_Shift_Required: boolean;
        Job_Profile_Exempt_Data: Array<StaffingTypes.IJob_Profile_Exempt_Data>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Critical_Job: boolean;
        Difficulty_to_Fill_Reference: StaffingTypes.IDifficulty_to_Fill_Reference;
    }
    export interface IPosition_Restrictions_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Availability_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Earliest_Hire_Date: date;
        Job_Family_Reference: Array<StaffingTypes.IJob_Family_Reference>;
        Job_Profile_Restriction_Summary_Data: Array<StaffingTypes.IJob_Profile_Restriction_Summary_Data>;
        Location_Reference: Array<StaffingTypes.ILocation_Reference>;
        Worker_Type_Reference: StaffingTypes.IWorker_Type_Reference;
        Time_Type_Reference: StaffingTypes.ITime_Type_Reference;
        Position_Worker_Type_Reference: Array<StaffingTypes.IPosition_Worker_Type_Reference>;
    }
    export interface IDefault_Compensation_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Primary_Compensation_Basis: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Primary_Compensation_Basis_Amount_Change: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Primary_Compensation_Basis_Percent_Change: totalDigits,fractionDigits;
        Guidelines_Data: StaffingTypes.IGuidelines_Data;
        Pay_Plan_Data: {
            Pay_Plan_Sub_Data: Array<{
                Pay_Plan_Reference: StaffingTypes.IPay_Plan_Reference;
                /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                Amount: totalDigits,fractionDigits;
                /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                Percent_Change: totalDigits,fractionDigits;
                /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                Amount_Change: totalDigits,fractionDigits;
                Currency_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
                Frequency_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Expected_End_Date: date;
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Actual_End_Date: date;
            }>;
        };
        Unit_Salary_Plan_Data: {
            Unit_Salary_Plan_Sub_Data: Array<StaffingTypes.IUnit_Salary_Plan_Sub_Data>;
        };
        Allowance_Plan_Non-Unit_Based_Data: StaffingTypes.IAllowance_Plan_Non-Unit_Based_Data;
        Allowance_Plan_Unit_Based_Data: StaffingTypes.IAllowance_Plan_Unit_Based_Data;
        Bonus_Plan_Data: {
            Bonus_Plan_Sub_Data: Array<StaffingTypes.IBonus_Plan_Sub_Data>;
        };
        Merit_Plan_Data: {
            Merit_Plan_Sub_Data: Array<StaffingTypes.IMerit_Plan_Sub_Data>;
        };
        Commission_Plan_Data: {
            Commission_Plan_Sub_Data: Array<StaffingTypes.ICommission_Plan_Sub_Data>;
        };
        Stock_Plan_Data: {
            Stock_Plan_Sub_Data: Array<StaffingTypes.IStock_Plan_Sub_Data>;
        };
        Period_Salary_Plan_Data: {
            Period_Salary_Plan_Sub_Data: Array<StaffingTypes.IPeriod_Salary_Plan_Sub_Data>;
        };
        Calculated_Plan_Data: StaffingTypes.ICalculated_Plan_Data;
    }
    export interface IDefault_Position_Organization_Assignments_Data {
        Company_Assignments_Reference: Array<StaffingTypes.ICompany_Assignments_Reference>;
        Cost_Center_Assignments_Reference: Array<StaffingTypes.ICost_Center_Assignments_Reference>;
        Region_Assignments_Reference: Array<StaffingTypes.IRegion_Assignments_Reference>;
        Custom_Organization_Assignments_Reference: Array<StaffingTypes.ICustom_Organization_Assignments_Reference>;
    }
    export interface IWorker_For_Filled_Position {
        Worker_Reference: StaffingTypes.IWorker_Reference;
        Position_Reference: StaffingTypes.IPosition_Reference;
    }
    export interface ICompetency_Profile_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IQualification_Source_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICompetency_Profile_Data {
        Competency_Reference: StaffingTypes.ICompetency_Reference;
        Proficiency_Rating_Reference: StaffingTypes.IProficiency_Rating_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Required: boolean;
        Qualification_Source_Reference: StaffingTypes.IQualification_Source_Reference;
    }
    export interface ICompetency_Data {
        Competency_Profile_Reference: StaffingTypes.ICompetency_Profile_Reference;
        Competency_Profile_Data: StaffingTypes.ICompetency_Profile_Data;
    }
    export interface ICertification_Profile_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICertification_Profile_Data {
        Country_Reference: StaffingTypes.ICountry_Reference;
        Certification_Reference: StaffingTypes.ICertification_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Certification_Name: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Certification_Issuer: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Required: boolean;
        Qualification_Source_Reference: StaffingTypes.IQualification_Source_Reference;
        Specialty_Achievement_Data: Array<{
            Specialty_Reference: StaffingTypes.ISpecialty_Reference;
            Subspecialty_Reference: Array<StaffingTypes.ISubspecialty_Reference>;
        }>;
    }
    export interface IEducation_Profile_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEducation_Profile_Data {
        Degree_Reference: StaffingTypes.IDegree_Reference;
        Field_Of_Study_Reference: StaffingTypes.IField_Of_Study_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Required: boolean;
        Qualification_Source_Reference: StaffingTypes.IQualification_Source_Reference;
    }
    export interface ILanguage_Profile_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ILanguage_Profile_Data {
        Language_Reference: StaffingTypes.ILanguage_Reference;
        Language_Ability_Data: Array<StaffingTypes.ILanguage_Ability_Data>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Required: boolean;
        Qualification_Source_Reference: StaffingTypes.IQualification_Source_Reference;
    }
    export interface ILanguage_Data {
        Language_Profile_Reference: StaffingTypes.ILanguage_Profile_Reference;
        Language_Profile_Data: StaffingTypes.ILanguage_Profile_Data;
    }
    export interface IResponsibility_Profile_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IResponsibility_Profile_Data {
        /** urn:com.workday/bsvc#RichText(undefined) */
        Responsibility: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Required: boolean;
        Qualification_Source_Reference: StaffingTypes.IQualification_Source_Reference;
    }
    export interface IResponsibility_Data {
        Responsibility_Profile_Reference: StaffingTypes.IResponsibility_Profile_Reference;
        Responsibility_Profile_Data: StaffingTypes.IResponsibility_Profile_Data;
    }
    export interface ITraining_Profile_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ITraining_Profile_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Training_Name: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Description: string;
        Training_Type_Reference: StaffingTypes.ITraining_Type_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Required: boolean;
        Qualification_Source_Reference: StaffingTypes.IQualification_Source_Reference;
    }
    export interface IWorker_Experience_Profile_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWork_Experience_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISkill_Profile_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISkill_Profile_Data {
        Skill_Reference: StaffingTypes.ISkill_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Name: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Required: boolean;
        Qualification_Source_Reference: StaffingTypes.IQualification_Source_Reference;
    }
    export interface IJob_Requisition_Status_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRecruiting_Instruction_Data {
        Recruiting_Instruction_Reference: StaffingTypes.IRecruiting_Instruction_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Do_Not_Send_To_Recruiting_System: boolean;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Name: string;
    }
    export interface IPosition {
        Position_Reference: StaffingTypes.IPosition_Reference;
        Position_Data: {
            Supervisory_Organization_Reference: StaffingTypes.ISupervisory_Organization_Reference;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Effective_Date: date;
            Position_Definition_Data: StaffingTypes.IPosition_Definition_Data;
            Position_Restrictions_Data: StaffingTypes.IPosition_Restrictions_Data;
            Default_Compensation_Data: StaffingTypes.IDefault_Compensation_Data;
            Default_Position_Organization_Assignments_Data: StaffingTypes.IDefault_Position_Organization_Assignments_Data;
            Worker_For_Filled_Position: StaffingTypes.IWorker_For_Filled_Position;
            Qualification_Data: {
                Competency_Data: Array<StaffingTypes.ICompetency_Data>;
                Certification_Data: Array<{
                    Certification_Profile_Reference: StaffingTypes.ICertification_Profile_Reference;
                    Certification_Profile_Data: StaffingTypes.ICertification_Profile_Data;
                }>;
                Education_Data: Array<{
                    Education_Profile_Reference: StaffingTypes.IEducation_Profile_Reference;
                    Education_Profile_Data: StaffingTypes.IEducation_Profile_Data;
                }>;
                Language_Data: Array<StaffingTypes.ILanguage_Data>;
                Responsibility_Data: Array<StaffingTypes.IResponsibility_Data>;
                Training_Data: Array<{
                    Training_Profile_Reference: StaffingTypes.ITraining_Profile_Reference;
                    Training_Profile_Data: StaffingTypes.ITraining_Profile_Data;
                }>;
                Work_Experience_Data: Array<{
                    Worker_Experience_Profile_Reference: StaffingTypes.IWorker_Experience_Profile_Reference;
                    Work_Experience_Data: {
                        Work_Experience_Reference: StaffingTypes.IWork_Experience_Reference;
                        Work_Experience_Rating_Reference: StaffingTypes.IWork_Experience_Rating_Reference;
                        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                        Required: boolean;
                        Qualification_Source_Reference: StaffingTypes.IQualification_Source_Reference;
                    };
                }>;
                Skill_Data: Array<{
                    Skill_Profile_Reference: StaffingTypes.ISkill_Profile_Reference;
                    Skill_Profile_Data: StaffingTypes.ISkill_Profile_Data;
                }>;
            };
            Integration_Field_Override_Data: Array<StaffingTypes.IIntegration_Field_Override_Data>;
            Job_Requisition_Data: {
                Job_Requisition_Reference: StaffingTypes.IJob_Requisition_Reference;
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                Job_Requisition_ID: string;
                Job_Requisition_Status_Reference: StaffingTypes.IJob_Requisition_Status_Reference;
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                Job_Posting_Title: string;
                Recruiting_Instruction_Data: StaffingTypes.IRecruiting_Instruction_Data;
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Academic_Tenure_Eligible: boolean;
                /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                Number_of_Openings: totalDigits,minInclusive,fractionDigits;
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                Job_Description_Summary: string;
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                Justification: string;
                Job_Requisition_Attachments: StaffingTypes.IJob_Requisition_Attachments;
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Recruiting_Start_Date: date;
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Target_Hire_Date: date;
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Target_End_Date: date;
                Job_Profile_Reference: StaffingTypes.IJob_Profile_Reference;
                Worker_Type_Reference: StaffingTypes.IWorker_Type_Reference;
                Position_Worker_Type_Reference: StaffingTypes.IPosition_Worker_Type_Reference;
                Primary_Location_Reference: StaffingTypes.IPrimary_Location_Reference;
                Additional_Locations_Reference: Array<StaffingTypes.IAdditional_Locations_Reference>;
                Position_Time_Type_Reference: StaffingTypes.IPosition_Time_Type_Reference;
                /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                Scheduled_Weekly_Hours: totalDigits,fractionDigits;
                Work_Shift_Reference: StaffingTypes.IWork_Shift_Reference;
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Spotlight_Job: boolean;
                Qualification_Data: {
                    Responsibility_Qualification_Replacement: StaffingTypes.IResponsibility_Qualification_Replacement;
                    Work_Experience_Qualification_Replacement: StaffingTypes.IWork_Experience_Qualification_Replacement;
                    Education_Qualification_Replacement: StaffingTypes.IEducation_Qualification_Replacement;
                    Language_Qualification_Replacement: StaffingTypes.ILanguage_Qualification_Replacement;
                    Competency_Qualification_Replacement: StaffingTypes.ICompetency_Qualification_Replacement;
                    Certification_Qualification_Replacement: StaffingTypes.ICertification_Qualification_Replacement;
                    Training_Qualification_Replacement: StaffingTypes.ITraining_Qualification_Replacement;
                    Skill_Qualification_Replacement: StaffingTypes.ISkill_Qualification_Replacement;
                };
                Replacement_for_Worker_Reference: StaffingTypes.IReplacement_for_Worker_Reference;
            };
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Closed: boolean;
        };
    }
    export interface IEdit_Service_Dates_Data {
        Worker_Reference: StaffingTypes.IWorker_Reference;
        Edit_Service_Dates_Event_Data: StaffingTypes.IEdit_Service_Dates_Event_Data;
    }
    export interface IEdit_Service_Dates_Event_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ITransaction_Log_Criteria {
        Transaction_Date_Range_Data: StaffingTypes.ITransaction_Date_Range_Data;
        Transaction_Type_References: StaffingTypes.ITransaction_Type_References;
        Subscriber_Reference: StaffingTypes.ISubscriber_Reference;
    }
    export interface ILeadership_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IOrganization_Owner_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IOrganization_Visibility_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IExternal_URL_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IExternal_IDs_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRoles_Data {
        Organization_Role_Data: Array<{
            Role_Reference: StaffingTypes.IRole_Reference;
            Worker_Reference: Array<StaffingTypes.IWorker_Reference>;
        }>;
    }
    export interface ITop-Level_Organization_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISuperior_Organization_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISubordinate_Organization_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IIncluded_Organization_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IIncluded_In_Organization_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IHierarchy_Data {
        Top-Level_Organization_Reference: StaffingTypes.ITop-Level_Organization_Reference;
        Superior_Organization_Reference: StaffingTypes.ISuperior_Organization_Reference;
        Subordinate_Organization_Reference: Array<StaffingTypes.ISubordinate_Organization_Reference>;
        Included_Organization_Reference: Array<StaffingTypes.IIncluded_Organization_Reference>;
        Included_In_Organization_Reference: Array<StaffingTypes.IIncluded_In_Organization_Reference>;
    }
    export interface IOrganization_Assignments_Data {
        Organization_Type_Reference: StaffingTypes.IOrganization_Type_Reference;
        Organization_Reference: StaffingTypes.IOrganization_Reference;
    }
    export interface IStaffing_Restrictions_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Availability_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Earliest_Hire_Date: date;
        Job_Family_Reference: Array<StaffingTypes.IJob_Family_Reference>;
        Job_Profile_Restriction_Summary_Data: Array<StaffingTypes.IJob_Profile_Restriction_Summary_Data>;
        Location_Reference: Array<StaffingTypes.ILocation_Reference>;
        Worker_Type_Reference: StaffingTypes.IWorker_Type_Reference;
        Time_Type_Reference: StaffingTypes.ITime_Type_Reference;
        Position_Worker_Type_Reference: Array<StaffingTypes.IPosition_Worker_Type_Reference>;
    }
    export interface ISupervisory_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Staffing_Model: string;
        Location_Reference: StaffingTypes.ILocation_Reference;
        Organization_Assignments_Data: Array<StaffingTypes.IOrganization_Assignments_Data>;
        Staffing_Restrictions_Data: StaffingTypes.IStaffing_Restrictions_Data;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Available_For_Hire: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Hiring_Freeze: boolean;
    }
    export interface IOrganization {
        Organization_Reference: StaffingTypes.IOrganization_Reference;
        Organization_Data: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Reference_ID: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Name: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Description: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Organization_Code: string;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Include_Manager_in_Name: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Include_Organization_Code_in_Name: boolean;
            Organization_Type_Reference: StaffingTypes.IOrganization_Type_Reference;
            Organization_Subtype_Reference: StaffingTypes.IOrganization_Subtype_Reference;
            /** urn:com.workday/bsvc#xsd:dateTime(undefined) */
            Availibility_Date: dateTime;
            /** urn:com.workday/bsvc#xsd:dateTime(undefined) */
            Last_Updated_DateTime: dateTime;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Inactive: boolean;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Inactive_Date: date;
            Manager_Reference: StaffingTypes.IManager_Reference;
            Leadership_Reference: Array<StaffingTypes.ILeadership_Reference>;
            Organization_Owner_Reference: StaffingTypes.IOrganization_Owner_Reference;
            Organization_Visibility_Reference: StaffingTypes.IOrganization_Visibility_Reference;
            External_URL_Reference: StaffingTypes.IExternal_URL_Reference;
            External_IDs_Data: StaffingTypes.IExternal_IDs_Data;
            Roles_Data: StaffingTypes.IRoles_Data;
            Hierarchy_Data: StaffingTypes.IHierarchy_Data;
            Supervisory_Data: StaffingTypes.ISupervisory_Data;
            Integration_Field_Override_Data: Array<StaffingTypes.IIntegration_Field_Override_Data>;
        };
    }
    export interface IEnd_Additional_Job_Event_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Last_Day_of_Work: date;
        Reason_Reference: StaffingTypes.IReason_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Pay_Through_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Notify_Employee_By_Date: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Close_Position: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Job_Overlap_Allowed: boolean;
    }
    export interface IEnd_Additional_Job_Data {
        Employee_Reference: StaffingTypes.IEmployee_Reference;
        Position_Reference: StaffingTypes.IPosition_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Additional_Job_Date: date;
        End_Additional_Job_Event_Data: StaffingTypes.IEnd_Additional_Job_Event_Data;
        Assign_Organization_Roles_Sub_Process: StaffingTypes.IAssign_Organization_Roles_Sub_Process;
        Create_Job_Requisition_Sub_Process: StaffingTypes.ICreate_Job_Requisition_Sub_Process;
        Check_Position_Budget_Sub_Process: StaffingTypes.ICheck_Position_Budget_Sub_Process;
        End_Academic_Appointment_Sub_Process: StaffingTypes.IEnd_Academic_Appointment_Sub_Process;
        Manage_Union_Membership_Sub_Process: StaffingTypes.IManage_Union_Membership_Sub_Process;
    }
    export interface IAdditional_Job_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAdd_Additional_Job_Event_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Position_ID: string;
        Additional_Job_Reason_Reference: StaffingTypes.IAdditional_Job_Reason_Reference;
        Employee_Type_Reference: StaffingTypes.IEmployee_Type_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        First_Day_of_Work: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Probation_Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Probation_End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Employment_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Conversion_Position_Start_Date: date;
        Position_Details: StaffingTypes.IPosition_Details;
    }
    export interface IPropose_Compensation_for_Additional_Job_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Propose_Compensation_for_Hire_Data: StaffingTypes.IPropose_Compensation_for_Hire_Data;
    }
    export interface IProposed_Primary_Job_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISwitch_Primary_Job_Data {
        Reason_Reference: StaffingTypes.IReason_Reference;
        Proposed_Primary_Job_Reference: StaffingTypes.IProposed_Primary_Job_Reference;
    }
    export interface ISwitch_Primary_Job_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Switch_Primary_Job_Data: StaffingTypes.ISwitch_Primary_Job_Data;
    }
    export interface IAssign_Collective_Agreement_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Assign_Employee_Collective_Agreement_Data: StaffingTypes.IAssign_Employee_Collective_Agreement_Data;
    }
    export interface IMaintain_Employee_Contracts_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Maintain_Employee_Contracts_Data: {
            Employee_Contract_Data: Array<StaffingTypes.IEmployee_Contract_Data>;
        };
    }
    export interface IAdd_Additional_Job_Data {
        Employee_Reference: StaffingTypes.IEmployee_Reference;
        Organization_Reference: StaffingTypes.IOrganization_Reference;
        Position_Reference: StaffingTypes.IPosition_Reference;
        Job_Requisition_Reference: StaffingTypes.IJob_Requisition_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Exclude_from_Headcount: boolean;
        Add_Additional_Job_Event_Data: StaffingTypes.IAdd_Additional_Job_Event_Data;
        Edit_Assign_Organization_Sub_Process: StaffingTypes.IEdit_Assign_Organization_Sub_Process;
        Assign_Matrix_Organization_Sub_Process: StaffingTypes.IAssign_Matrix_Organization_Sub_Process;
        Assign_Pay_Group_Sub_Process: {
            Business_Sub_Process_Parameters: {
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Auto_Complete: boolean;
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Skip: boolean;
                Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
                Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
            };
            Assign_Pay_Group_Data: {
                Pay_Group_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
                Additional_Positions_for_Pay_Group_Assignment_Reference: Array<StaffingTypes.IAdditional_Positions_for_Pay_Group_Assignment_Reference>;
            };
        };
        Propose_Compensation_for_Additional_Job_Sub_Process: StaffingTypes.IPropose_Compensation_for_Additional_Job_Sub_Process;
        Check_Position_Budget_Sub_Process: StaffingTypes.ICheck_Position_Budget_Sub_Process;
        Onboarding_Setup_Sub_Process: StaffingTypes.IOnboarding_Setup_Sub_Process;
        Assign_Costing_Allocation_Sub_Process: StaffingTypes.IAssign_Costing_Allocation_Sub_Process;
        Switch_Primary_Job_Sub_Process: StaffingTypes.ISwitch_Primary_Job_Sub_Process;
        Add_Academic_Appointment_Sub_Process: StaffingTypes.IAdd_Academic_Appointment_Sub_Process;
        Student_Employment_Eligibility_Sub_Process: StaffingTypes.IStudent_Employment_Eligibility_Sub_Process;
        Manage_Union_Membership_Sub_Process: StaffingTypes.IManage_Union_Membership_Sub_Process;
        Assign_Collective_Agreement_Sub_Process: StaffingTypes.IAssign_Collective_Agreement_Sub_Process;
        Maintain_Employee_Contracts_Sub_Process: StaffingTypes.IMaintain_Employee_Contracts_Sub_Process;
        Manage_Employee_Probation_Period_Sub_Business_Process: StaffingTypes.IManage_Employee_Probation_Period_Sub_Business_Process;
    }
    export interface IJob_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAdd_Retiree_Status_Event_Data {
        Reason_Reference: StaffingTypes.IReason_Reference;
        Retiree_Organization_Reference: StaffingTypes.IRetiree_Organization_Reference;
    }
    export interface IAdd_Retiree_Status_Data {
        Employee_Reference: StaffingTypes.IEmployee_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Retiree_Status_Date: date;
        Add_Retiree_Status_Event_Data: StaffingTypes.IAdd_Retiree_Status_Event_Data;
    }
    export interface IEnd_Retirement_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRemove_Retiree_Status_Event_Data {
        End_Retirement_Reason_Reference: StaffingTypes.IEnd_Retirement_Reason_Reference;
    }
    export interface IRemove_Retiree_Status_Data {
        Employee_Reference: StaffingTypes.IEmployee_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Retirement_Date: date;
        Remove_Retiree_Status_Event_Data: StaffingTypes.IRemove_Retiree_Status_Event_Data;
    }
    export interface IEmployee_Contract_Event_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEmployee_Contract_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICitizenship_Status_Mapping_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICitizenship_Status_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Citizenship_Status_ID: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Citizenship_Status_Name: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Citizenship_Status_Description: string;
        Country_Reference: StaffingTypes.ICountry_Reference;
        Citizenship_Status_Mapping_Reference: StaffingTypes.ICitizenship_Status_Mapping_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Citizen: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Inactive: boolean;
    }
    export interface ICitizenship_Status {
        Citizenship_Status_Reference: StaffingTypes.ICitizenship_Status_Reference;
        Citizenship_Status_Data: Array<StaffingTypes.ICitizenship_Status_Data>;
    }
    export interface IPosition_Edit_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEdit_Position_Restriction_Event_Data {
        Position_Edit_Reason_Reference: StaffingTypes.IPosition_Edit_Reason_Reference;
        Position_Data: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Position_ID: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Job_Posting_Title: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Job_Description_Summary: string;
            /** urn:com.workday/bsvc#RichText(undefined) */
            Job_Description: string;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Critical_Job: boolean;
            Difficulty_to_Fill_Reference: StaffingTypes.IDifficulty_to_Fill_Reference;
        };
        Position_Group_Restrictions_Data: StaffingTypes.IPosition_Group_Restrictions_Data;
        Qualification_Replacement_Data: StaffingTypes.IQualification_Replacement_Data;
    }
    export interface IEdit_Position_Restrictions_Data {
        Position_Reference: StaffingTypes.IPosition_Reference;
        Edit_Position_Restriction_Event_Data: StaffingTypes.IEdit_Position_Restriction_Event_Data;
        Edit_Assign_Organization_Sub_Process: StaffingTypes.IEdit_Assign_Organization_Sub_Process;
        Request_Default_Compensation_Sub_Process: StaffingTypes.IRequest_Default_Compensation_Sub_Process;
        Assign_Pay_Group_Sub_Process: {
            Business_Sub_Process_Parameters: {
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Auto_Complete: boolean;
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Skip: boolean;
                Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
                Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
            };
            Assign_Pay_Group_Data: {
                Pay_Group_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
            };
        };
    }
    export interface IJob_Classification_Group_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IJob_Classification_Group_Name_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Job_Classification_Group_Name: string;
    }
    export interface IGlobal_Setup_Data_Mapping_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IJob_Classification_Mapping_ID_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IJob_Classification_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Job_Classification_ID: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Description: string;
        Job_Classification_Mapping_ID_Reference: StaffingTypes.IJob_Classification_Mapping_ID_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Inactive: boolean;
    }
    export interface IJob_Classification {
        Job_Classification_Reference: StaffingTypes.IJob_Classification_Reference;
        Job_Classification_Data: StaffingTypes.IJob_Classification_Data;
    }
    export interface IJob_Classification_Group_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Job_Classification_Group_Name: string;
        Global_Setup_Data_Mapping_Reference: StaffingTypes.IGlobal_Setup_Data_Mapping_Reference;
        Location_Reference: StaffingTypes.ILocation_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Inactive: boolean;
        Job_Classification: Array<StaffingTypes.IJob_Classification>;
    }
    export interface IJob_Classification_Group {
        Job_Classification_Group_Reference: StaffingTypes.IJob_Classification_Group_Reference;
        Job_Classification_Group_Name_Data: Array<StaffingTypes.IJob_Classification_Group_Name_Data>;
        Job_Classification_Group_Data: Array<StaffingTypes.IJob_Classification_Group_Data>;
    }
    export interface IJob_Profile_Data {
        Job_Profile_Reference: StaffingTypes.IJob_Profile_Reference;
    }
    export interface IJob_Family {
        Job_Family_Reference: StaffingTypes.IJob_Family_Reference;
        Job_Family_Data: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Effective_Date: date;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Name: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Summary: string;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Inactive: boolean;
            Job_Profile_Data: Array<StaffingTypes.IJob_Profile_Data>;
            Integration_Field_Override_Data: Array<StaffingTypes.IIntegration_Field_Override_Data>;
        };
    }
    export interface IJob_Family_Group_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IJob_Profile_Info_Data {
        Job_Profile_Reference: StaffingTypes.IJob_Profile_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Job_Profile_Name: string;
        Management_Level_Reference: StaffingTypes.IManagement_Level_Reference;
        Job_Category_Reference: StaffingTypes.IJob_Category_Reference;
        Job_Family_Reference: Array<StaffingTypes.IJob_Family_Reference>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Work_Shift_Required: boolean;
        Job_Profile_Exempt_Data: Array<StaffingTypes.IJob_Profile_Exempt_Data>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Critical_Job: boolean;
        Difficulty_to_Fill_Reference: StaffingTypes.IDifficulty_to_Fill_Reference;
    }
    export interface IJob_Family_Info_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Job_Family_Name: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Job_Family_Summary: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Inactive: boolean;
        Job_Profile_Info_Data: Array<StaffingTypes.IJob_Profile_Info_Data>;
    }
    export interface IJob_Family_Group_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Name: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Summary: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Inactive: boolean;
        Job_Family_Data: Array<{
            Job_Family_Reference: StaffingTypes.IJob_Family_Reference;
            Job_Family_Info_Data: StaffingTypes.IJob_Family_Info_Data;
        }>;
    }
    export interface IJob_Family_Group {
        Job_Family_Group_Reference: StaffingTypes.IJob_Family_Group_Reference;
        Job_Family_Group_Data: StaffingTypes.IJob_Family_Group_Data;
    }
    export interface IJob_Family_Groups_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IStart_International_Assignment_Event_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Position_ID: string;
        International_Assignment_Type_Reference: StaffingTypes.IInternational_Assignment_Type_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expected_Assignment_End_Date: date;
        Start_International_Assignment_Reason_Reference: StaffingTypes.IStart_International_Assignment_Reason_Reference;
        Employee_Type_Reference: StaffingTypes.IEmployee_Type_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        First_Day_of_Work: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Employment_Date: date;
        Position_Details: StaffingTypes.IPosition_Details;
    }
    export interface IStart_International_Assignment_Data {
        Employee_Reference: StaffingTypes.IEmployee_Reference;
        Organization_Reference: StaffingTypes.IOrganization_Reference;
        Position_Reference: StaffingTypes.IPosition_Reference;
        Job_Requisition_Reference: StaffingTypes.IJob_Requisition_Reference;
        Start_International_Assignment_Event_Data: StaffingTypes.IStart_International_Assignment_Event_Data;
        Edit_Assign_Organization_Sub_Process: StaffingTypes.IEdit_Assign_Organization_Sub_Process;
        Assign_Matrix_Organization_Sub_Process: StaffingTypes.IAssign_Matrix_Organization_Sub_Process;
        Assign_Pay_Group_Sub_Process: {
            Business_Sub_Process_Parameters: {
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Auto_Complete: boolean;
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Skip: boolean;
                Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
                Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
            };
            Assign_Pay_Group_Data: {
                Pay_Group_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
                Additional_Positions_for_Pay_Group_Assignment_Reference: Array<StaffingTypes.IAdditional_Positions_for_Pay_Group_Assignment_Reference>;
            };
        };
        Propose_Compensation_for_Additional_Job_Sub_Process: StaffingTypes.IPropose_Compensation_for_Additional_Job_Sub_Process;
        Maintain_Employee_Contracts_Sub_Business_Process: StaffingTypes.IMaintain_Employee_Contracts_Sub_Business_Process;
        Update_ID_Information_Sub_Process: StaffingTypes.IUpdate_ID_Information_Sub_Process;
        Edit_Government_IDs_Sub_Process: StaffingTypes.IEdit_Government_IDs_Sub_Process;
        Edit_Passports_and_Visas_Sub_Process: StaffingTypes.IEdit_Passports_and_Visas_Sub_Process;
        Edit_License_Sub_Process: StaffingTypes.IEdit_License_Sub_Process;
        Edit_Custom_IDs_Sub_Process: StaffingTypes.IEdit_Custom_IDs_Sub_Process;
        Check_Position_Budget_Sub_Process: StaffingTypes.ICheck_Position_Budget_Sub_Process;
        Onboarding_Setup_Sub_Process: StaffingTypes.IOnboarding_Setup_Sub_Process;
        Assign_Costing_Allocation_Sub_Process: StaffingTypes.IAssign_Costing_Allocation_Sub_Process;
    }
    export interface IStart_International_Assignment_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEnd_International_Assignment_Event_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Last_Day_of_Work: date;
        Reason_Reference: StaffingTypes.IReason_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Pay_Through_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Notify_Employee_By_Date: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Close_Position: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Job_Overlap_Allowed: boolean;
    }
    export interface IEnd_International_Assignment_Data {
        Employee_Reference: StaffingTypes.IEmployee_Reference;
        Position_Reference: StaffingTypes.IPosition_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_International_Assignment_Date: date;
        End_International_Assignment_Event_Data: StaffingTypes.IEnd_International_Assignment_Event_Data;
        Create_Job_Requisition_Sub_Process: StaffingTypes.ICreate_Job_Requisition_Sub_Process;
        Check_Position_Budget_Sub_Process: StaffingTypes.ICheck_Position_Budget_Sub_Process;
    }
    export interface IEnd_International_Assignment_for_Employee_Event_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAssign_Organization_Roles_Data {
        Role_Assignee_Reference: StaffingTypes.IRole_Assignee_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        Role_Assignment: Array<StaffingTypes.IRole_Assignment>;
    }
    export interface IAssign_Roles_Event_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IHeadcount_Option_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProposed_Position_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProposed_Job_Requisition_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IJob_Details_Data {
        Job_Profile_Reference: StaffingTypes.IJob_Profile_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Position_Title: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Business_Title: string;
        Location_Reference: StaffingTypes.ILocation_Reference;
        Work_Space_Reference: StaffingTypes.IWork_Space_Reference;
        Position_Time_Type_Reference: StaffingTypes.IPosition_Time_Type_Reference;
        Work_Shift_Reference: StaffingTypes.IWork_Shift_Reference;
        Work_Hours_Profile_Reference: StaffingTypes.IWork_Hours_Profile_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Default_Hours: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Scheduled_Hours: totalDigits,fractionDigits;
        Working_Time_Frequency_Reference: StaffingTypes.IWorking_Time_Frequency_Reference;
        Working_Time_Unit_Reference: StaffingTypes.IWorking_Time_Unit_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Working_Time_Value: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Specify_Paid_FTE: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Paid_FTE: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Specify_Working_FTE: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Working_FTE: totalDigits,minInclusive,fractionDigits;
        Pay_Rate_Type_Reference: StaffingTypes.IPay_Rate_Type_Reference;
        Additional_Job_Classifications_Reference: Array<StaffingTypes.IAdditional_Job_Classifications_Reference>;
        Company_Insider_Type_Reference: Array<StaffingTypes.ICompany_Insider_Type_Reference>;
        Annual_Work_Period_Reference: StaffingTypes.IAnnual_Work_Period_Reference;
        Disbursement_Plan_Period_Reference: StaffingTypes.IDisbursement_Plan_Period_Reference;
        Work_Study_Reference: StaffingTypes.IWork_Study_Reference;
        Workers__Compensation_Code_Override_Reference: StaffingTypes.IWorkers__Compensation_Code_Override_Reference;
        Position_External_ID_Data: StaffingTypes.IPosition_External_ID_Data;
    }
    export interface IChange_Job_Detail_Data {
        Reason_Reference: StaffingTypes.IReason_Reference;
        Supervisory_Organization_Reference: StaffingTypes.ISupervisory_Organization_Reference;
        Headcount_Option_Reference: StaffingTypes.IHeadcount_Option_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Job_Overlap_Allowed: boolean;
        Proposed_Position_Reference: StaffingTypes.IProposed_Position_Reference;
        Proposed_Job_Requisition_Reference: StaffingTypes.IProposed_Job_Requisition_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Create_Position: boolean;
        Employee_Type_Reference: StaffingTypes.IEmployee_Type_Reference;
        Contingent_Worker_Type_Reference: StaffingTypes.IContingent_Worker_Type_Reference;
        Job_Details_Data: StaffingTypes.IJob_Details_Data;
        International_Assignment_Type_Reference: StaffingTypes.IInternational_Assignment_Type_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expected_Assignment_End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Employment_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Contract_End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        First_Day_of_Work: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Notify_Worker_By: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        New_Position_ID: string;
        Contract_Details_Data: StaffingTypes.IContract_Details_Data;
        Worker_Document_Data: Array<{
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            File_Name: maxLength;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Worker_Document_Comment: string;
            Document_Category_Reference: StaffingTypes.IDocument_Category_Reference;
            /** urn:com.workday/bsvc#xsd:base64Binary(undefined) */
            File: base64Binary;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Content_Type: maxLength;
        }>;
    }
    export interface IPropose_Compensation_for_Position_Data {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Initialize_Using_Defaulting_Logic: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Employee_Visibility_Date: date;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Primary_Compensation_Basis: totalDigits,fractionDigits;
        Compensation_Guidelines_Data: StaffingTypes.ICompensation_Guidelines_Data;
        Pay_Plan_Data: {
            Pay_Plan_Sub_Data: Array<{
                Pay_Plan_Reference: StaffingTypes.IPay_Plan_Reference;
                /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                Amount: totalDigits,fractionDigits;
                Currency_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
                Frequency_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Expected_End_Date: date;
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Actual_End_Date: date;
            }>;
        };
        Unit_Salary_Plan_Data: {
            Unit_Salary_Plan_Sub_Data: Array<StaffingTypes.IUnit_Salary_Plan_Sub_Data>;
        };
        Allowance_Plan_Data: {
            Allowance_Plan_Sub_Data: Array<StaffingTypes.IAllowance_Plan_Sub_Data>;
        };
        Unit_Allowance_Plan_Data: {
            Unit_Allowance_Plan_Sub_Data: Array<StaffingTypes.IUnit_Allowance_Plan_Sub_Data>;
        };
        Bonus_Plan_Data: {
            Bonus_Plan_Sub_Data: Array<StaffingTypes.IBonus_Plan_Sub_Data>;
        };
        Merit_Plan_Data: {
            Merit_Plan_Sub_Data: Array<StaffingTypes.IMerit_Plan_Sub_Data>;
        };
        Commission_Plan_Data: {
            Commission_Plan_Sub_Data: Array<StaffingTypes.ICommission_Plan_Sub_Data>;
        };
        Stock_Plan_Data: {
            Stock_Plan_Sub_Data: Array<StaffingTypes.IStock_Plan_Sub_Data>;
        };
        Period_Salary_Plan_Data: {
            Period_Salary_Plan_Sub_Data: Array<StaffingTypes.IPeriod_Salary_Plan_Sub_Data>;
        };
        Calculated_Plan_Data: StaffingTypes.ICalculated_Plan_Data;
    }
    export interface IPropose_Compensation_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Propose_Compensation_for_Position_Data: StaffingTypes.IPropose_Compensation_for_Position_Data;
    }
    export interface IChange_Organization_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Position_Organization_Assignments_Data: {
            Company_Assignments_Reference: Array<StaffingTypes.ICompany_Assignments_Reference>;
            Cost_Center_Assignments_Reference: Array<StaffingTypes.ICost_Center_Assignments_Reference>;
            Region_Assignments_Reference: Array<StaffingTypes.IRegion_Assignments_Reference>;
            Custom_Organization_Assignment_Data: Array<StaffingTypes.ICustom_Organization_Assignment_Data>;
            Fund_Assignments_Reference: Array<StaffingTypes.IFund_Assignments_Reference>;
            Grant_Assignments_Reference: Array<StaffingTypes.IGrant_Assignments_Reference>;
            Program_Assignments_Reference: Array<StaffingTypes.IProgram_Assignments_Reference>;
            Business_Unit_Assignments_Reference: Array<StaffingTypes.IBusiness_Unit_Assignments_Reference>;
            Gift_Assignments_Reference: Array<StaffingTypes.IGift_Assignments_Reference>;
        };
    }
    export interface IAssignable_Role_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAssignees_to_Add_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAssignees_to_Remove_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISupervisory_Organization_Single_Assignment_Manager_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAssign_Roles_Role_Assignment_Data {
        Role_Assigner_Reference: StaffingTypes.IRole_Assigner_Reference;
        Assignable_Role_Reference: StaffingTypes.IAssignable_Role_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Remove_Existing_Assignees_for_Assignable_Role_on_Role_Assigner: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Update_Later_Dated_Assignments: boolean;
        Assignees_to_Add_Reference: Array<StaffingTypes.IAssignees_to_Add_Reference>;
        Assignees_to_Remove_Reference: Array<StaffingTypes.IAssignees_to_Remove_Reference>;
        Supervisory_Organization_Single_Assignment_Manager_Reference: StaffingTypes.ISupervisory_Organization_Single_Assignment_Manager_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Remove_Supervisory_Organization_Single_Assignment_Manager: boolean;
    }
    export interface IAssign_Roles_Sub_Process_Data {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Remove_All_Role_Assignments_for_Event_Target_Assignee: boolean;
        Assign_Roles_Role_Assignment_Data: Array<StaffingTypes.IAssign_Roles_Role_Assignment_Data>;
    }
    export interface IAssign_Roles_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Assign_Roles_Sub_Process_Data: StaffingTypes.IAssign_Roles_Sub_Process_Data;
    }
    export interface IProposed_Supervisory_Organization_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISubordinate_Supervisory_Organizations_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAssign_Superior_Organization_Data {
        Proposed_Supervisory_Organization_Reference: StaffingTypes.IProposed_Supervisory_Organization_Reference;
        Subordinate_Supervisory_Organizations_Reference: Array<StaffingTypes.ISubordinate_Supervisory_Organizations_Reference>;
    }
    export interface IAssign_Superior_Organization_Sub_Process {
        Business_Sub_Process_Parameters: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        };
        Assign_Superior_Organization_Data: StaffingTypes.IAssign_Superior_Organization_Data;
    }
    export interface ICreate_Subordinate_Event_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Availability_Date: date;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Organization_Name: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Organization_ID_in_Name: boolean;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Organization_Code: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Organization_Code_in_Name: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Manager_Leader_in_Name: boolean;
        Organization_Subtype_Reference: StaffingTypes.IOrganization_Subtype_Reference;
        External_URL_Reference: StaffingTypes.IExternal_URL_Reference;
        Primary_Location_Reference: StaffingTypes.IPrimary_Location_Reference;
    }
    export interface ICreate_Subordinate_Sub_Process {
        Business_Sub_Process_Parameters: Array<{
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Auto_Complete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Skip: boolean;
            Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
            Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
        }>;
        Create_Subordinate_Event_Data: Array<StaffingTypes.ICreate_Subordinate_Event_Data>;
    }
    export interface IChange_Job_Data {
        Worker_Reference: StaffingTypes.IWorker_Reference;
        Position_Reference: StaffingTypes.IPosition_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        Change_Job_Detail_Data: StaffingTypes.IChange_Job_Detail_Data;
        Propose_Compensation_Sub_Process: StaffingTypes.IPropose_Compensation_Sub_Process;
        Request_One_Time_Payment_Sub_Process: StaffingTypes.IRequest_One_Time_Payment_Sub_Process;
        Request_Stock_Grant_Sub_Process: StaffingTypes.IRequest_Stock_Grant_Sub_Process;
        Change_Organization_Sub_Process: StaffingTypes.IChange_Organization_Sub_Process;
        Assign_Pay_Group_Sub_Process: {
            Business_Sub_Process_Parameters: {
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Auto_Complete: boolean;
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Skip: boolean;
                Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
                Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
            };
            Assign_Pay_Group_Data: {
                Pay_Group_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
                Additional_Positions_for_Pay_Group_Assignment_Reference: Array<StaffingTypes.IAdditional_Positions_for_Pay_Group_Assignment_Reference>;
            };
        };
        Review_Payroll_Interface_Sub_Process: StaffingTypes.IReview_Payroll_Interface_Sub_Process;
        Assign_Matrix_Organization_Sub_Process: StaffingTypes.IAssign_Matrix_Organization_Sub_Process;
        Change_Personal_Information_Sub_Process: StaffingTypes.IChange_Personal_Information_Sub_Process;
        Maintain_Employee_Contracts_Sub_Process: StaffingTypes.IMaintain_Employee_Contracts_Sub_Process;
        Assign_Organization_Roles_Sub_Process: StaffingTypes.IAssign_Organization_Roles_Sub_Process;
        Assign_Roles_Sub_Process: StaffingTypes.IAssign_Roles_Sub_Process;
        Assign_Superior_Organization_Sub_Process: StaffingTypes.IAssign_Superior_Organization_Sub_Process;
        Create_Job_Requisition_Sub_Process: StaffingTypes.ICreate_Job_Requisition_Sub_Process;
        Check_Position_Budget_Sub_Process: StaffingTypes.ICheck_Position_Budget_Sub_Process;
        Switch_Primary_Job_Sub_Process: StaffingTypes.ISwitch_Primary_Job_Sub_Process;
        Update_Academic_Appointment_Sub_Process: StaffingTypes.IUpdate_Academic_Appointment_Sub_Process;
        Assign_Costing_Allocation_Sub_Process: StaffingTypes.IAssign_Costing_Allocation_Sub_Process;
        Assign_Employee_Collective_Agreement_Sub_Process: StaffingTypes.IAssign_Employee_Collective_Agreement_Sub_Process;
        Create_Subordinate_Sub_Process: StaffingTypes.ICreate_Subordinate_Sub_Process;
        Student_Employment_Eligibility_Sub_Process: StaffingTypes.IStudent_Employment_Eligibility_Sub_Process;
        Onboarding_Setup_Sub_Process: StaffingTypes.IOnboarding_Setup_Sub_Process;
        Manage_Union_Membership_Sub_Process: StaffingTypes.IManage_Union_Membership_Sub_Process;
        Manage_Employee_Probation_Period_Sub_Business_Process: StaffingTypes.IManage_Employee_Probation_Period_Sub_Business_Process;
        Edit_Notice_Periods_Sub_Process: StaffingTypes.IEdit_Notice_Periods_Sub_Process;
    }
    export interface ISwitch_Primary_Position_Request_Data {
        Worker_Reference: StaffingTypes.IWorker_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        Switch_Primary_Job_Data: StaffingTypes.ISwitch_Primary_Job_Data;
    }
    export interface IClose_Event_Data {
        Reason_Reference: StaffingTypes.IReason_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Close_Date: date;
    }
    export interface IClose_Restriction_Data {
        Position_Reference: StaffingTypes.IPosition_Reference;
        Close_Event_Data: Array<StaffingTypes.IClose_Event_Data>;
    }
    export interface IPosition_or_Headcount_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRestricted_to_Countries_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICollective_Agreement_Eligibility_Rule_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICollective_Agreement_Eligibility_Rule {
        Collective_Agreement_Eligibility_Rule_Reference: StaffingTypes.ICollective_Agreement_Eligibility_Rule_Reference;
    }
    export interface IFactor1_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IFactor2_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IFactor3_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IFactor4_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IFactor5_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICollective_Agreement_Factors_Mapping {
        Factor1_Reference: StaffingTypes.IFactor1_Reference;
        Factor2_Reference: StaffingTypes.IFactor2_Reference;
        Factor3_Reference: StaffingTypes.IFactor3_Reference;
        Factor4_Reference: StaffingTypes.IFactor4_Reference;
        Factor5_Reference: StaffingTypes.IFactor5_Reference;
    }
    export interface ICollective_Agreement_Classification_Parameter_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IFactor_Option1_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IFactor_Option2_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IFactor_Option3_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IFactor_Option4_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IFactor_Option5_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICollective_Agreement_Classification_Parameters {
        Collective_Agreement_Classification_Parameter_Reference: StaffingTypes.ICollective_Agreement_Classification_Parameter_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
        Factor_Option1_Reference: StaffingTypes.IFactor_Option1_Reference;
        Factor_Option2_Reference: StaffingTypes.IFactor_Option2_Reference;
        Factor_Option3_Reference: StaffingTypes.IFactor_Option3_Reference;
        Factor_Option4_Reference: StaffingTypes.IFactor_Option4_Reference;
        Factor_Option5_Reference: StaffingTypes.IFactor_Option5_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Inactive: boolean;
    }
    export interface ICollective_Agreement {
        Collective_Agreement_Reference: StaffingTypes.ICollective_Agreement_Reference;
        Collective_Agreement_Data: Array<{
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Agreement: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Code: string;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            Start_Date: date;
            /** urn:com.workday/bsvc#xsd:date(undefined) */
            End_Date: date;
            Restricted_to_Countries_Reference: Array<StaffingTypes.IRestricted_to_Countries_Reference>;
            Location_Reference: Array<StaffingTypes.ILocation_Reference>;
            Collective_Agreement_Eligibility_Rule: StaffingTypes.ICollective_Agreement_Eligibility_Rule;
            Union_Reference: Array<StaffingTypes.IUnion_Reference>;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Note: string;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Inactive: boolean;
            Collective_Agreement_Factors_Mapping: StaffingTypes.ICollective_Agreement_Factors_Mapping;
            Collective_Agreement_Classification_Parameters: Array<StaffingTypes.ICollective_Agreement_Classification_Parameters>;
        }>;
    }
    export interface IPersonal_Information_Change_Event_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPerson_Type_Criteria_Data {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Academic_Affiliates: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_External_Committee_Members: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_External_Student_Records: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Student_Prospect_Records: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Student_Records: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Include_Workers: boolean;
    }
    export interface IRequest_Criteria_Data {
        Person_Type_Criteria_Data: StaffingTypes.IPerson_Type_Criteria_Data;
    }
    export interface IChange_Personal_Information {
        Person_Reference: StaffingTypes.IPerson_Reference;
        Change_Personal_Information_Data: Array<{
            Person_Reference: StaffingTypes.IPerson_Reference;
            Universal_ID_Reference: StaffingTypes.IUniversal_ID_Reference;
            Personal_Information_Data: {
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Date_of_Birth: date;
                Birth_Country_Reference: StaffingTypes.IBirth_Country_Reference;
                Birth_Region_Reference: StaffingTypes.IBirth_Region_Reference;
                Gender_Reference: StaffingTypes.IGender_Reference;
                Disability_Information_Data: {
                    Disability_Status_Information_Data: Array<{
                        Disability_Status_Reference: StaffingTypes.IDisability_Status_Reference;
                        Disability_Status_Data: {
                            Disability_Reference: StaffingTypes.IDisability_Reference;
                            /** urn:com.workday/bsvc#xsd:date(undefined) */
                            Disability_Status_Date: date;
                            /** urn:com.workday/bsvc#xsd:date(undefined) */
                            Disability_Date_Known: date;
                            /** urn:com.workday/bsvc#xsd:date(undefined) */
                            Disability_End_Date: date;
                            Disability_Grade_Reference: StaffingTypes.IDisability_Grade_Reference;
                            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                            Disability_Degree: totalDigits,minInclusive,fractionDigits;
                            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                            Disability_Remaining_Capacity: totalDigits,minInclusive,fractionDigits;
                            Disability_Certification_Authority_Reference: StaffingTypes.IDisability_Certification_Authority_Reference;
                            /** urn:com.workday/bsvc#xsd:string(undefined) */
                            Disability_Certification_Authority: string;
                            /** urn:com.workday/bsvc#xsd:string(undefined) */
                            Disability_Certified_At: string;
                            /** urn:com.workday/bsvc#xsd:string(undefined) */
                            Disability_Certification_ID: string;
                            Disability_Certification_Basis_Reference: StaffingTypes.IDisability_Certification_Basis_Reference;
                            /** urn:com.workday/bsvc#xsd:date(undefined) */
                            Disability_Severity_Recognition_Date: date;
                            /** urn:com.workday/bsvc#xsd:decimal(undefined) */
                            Disability_FTE_Toward_Quota: totalDigits,minInclusive,fractionDigits;
                            /** urn:com.workday/bsvc#xsd:string(undefined) */
                            Disability_Work_Restrictions: string;
                            /** urn:com.workday/bsvc#xsd:string(undefined) */
                            Disability_Accommodations_Requested: string;
                            /** urn:com.workday/bsvc#xsd:string(undefined) */
                            Disability_Accommodations_Provided: string;
                            /** urn:com.workday/bsvc#xsd:string(undefined) */
                            Disability_Rehabilitation_Requested: string;
                            /** urn:com.workday/bsvc#xsd:string(undefined) */
                            Disability_Rehabilitation_Provided: string;
                            /** urn:com.workday/bsvc#xsd:string(undefined) */
                            Note: string;
                            Worker_Document_Reference: Array<StaffingTypes.IWorker_Document_Reference>;
                        };
                    }>;
                };
                Marital_Status_Reference: StaffingTypes.IMarital_Status_Reference;
                Citizenship_Reference: Array<StaffingTypes.ICitizenship_Reference>;
                Primary_Nationality_Reference: StaffingTypes.IPrimary_Nationality_Reference;
                Additional_Nationality_Reference: Array<StaffingTypes.IAdditional_Nationality_Reference>;
                Ethnicity_Reference: Array<StaffingTypes.IEthnicity_Reference>;
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Hispanic_or_Latino: boolean;
                Visual_Survey_Ethnicity_Reference: Array<StaffingTypes.IVisual_Survey_Ethnicity_Reference>;
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Hispanic_or_Latino_for_Visual_Survey: boolean;
                Religion_Reference: StaffingTypes.IReligion_Reference;
                Hukou_Region_Reference: StaffingTypes.IHukou_Region_Reference;
                Hukou_Subregion_Reference: StaffingTypes.IHukou_Subregion_Reference;
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                Hukou_Locality: string;
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                Hukou_Postal_Code: string;
                Hukou_Type_Reference: StaffingTypes.IHukou_Type_Reference;
                Native_Region_Reference: StaffingTypes.INative_Region_Reference;
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                Personnel_File_Agency: string;
                Military_Information_Data: StaffingTypes.IMilitary_Information_Data;
                Political_Affiliation_Reference: StaffingTypes.IPolitical_Affiliation_Reference;
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Date_of_Death: date;
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                City_of_Birth: string;
                City_of_Birth_Reference: StaffingTypes.ICity_of_Birth_Reference;
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Marital_Status_Date: date;
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Last_Medical_Exam_Date: date;
                /** urn:com.workday/bsvc#xsd:date(undefined) */
                Last_Medical_Exam_Valid_To: date;
                /** urn:com.workday/bsvc#xsd:string(undefined) */
                Medical_Exam_Notes: string;
                Blood_Type_Reference: StaffingTypes.IBlood_Type_Reference;
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Uses_Tobacco: boolean;
                Social_Benefits_Locality_Reference: StaffingTypes.ISocial_Benefits_Locality_Reference;
                LGBT_Identification_Reference: Array<StaffingTypes.ILGBT_Identification_Reference>;
                Sexual_Orientation_Reference: StaffingTypes.ISexual_Orientation_Reference;
                Gender_Identity_Reference: StaffingTypes.IGender_Identity_Reference;
                Pronoun_Reference: StaffingTypes.IPronoun_Reference;
                Relative_Name_Information_Data: StaffingTypes.IRelative_Name_Information_Data;
            };
        }>;
    }
    export interface IGovernment_Identification_data {
        National_ID: Array<StaffingTypes.INational_ID>;
        Government_ID: Array<StaffingTypes.IGovernment_ID>;
    }
    export interface IChange_Government_IDs_Data {
        Person_Reference: StaffingTypes.IPerson_Reference;
        Universal_ID_Reference: StaffingTypes.IUniversal_ID_Reference;
        Government_Identification_data: StaffingTypes.IGovernment_Identification_data;
    }
    export interface IChange_Government_IDs {
        Person_Reference: StaffingTypes.IPerson_Reference;
        Change_Government_IDs_Data: Array<StaffingTypes.IChange_Government_IDs_Data>;
    }
    export interface IChange_Passports_and_Visas_Data {
        Person_Reference: StaffingTypes.IPerson_Reference;
        Universal_ID_Reference: StaffingTypes.IUniversal_ID_Reference;
        Passports_and_Visas_Identification_Data: StaffingTypes.IPassports_and_Visas_Identification_Data;
    }
    export interface IChange_Passports_and_Visas {
        Person_Reference: StaffingTypes.IPerson_Reference;
        Change_Passports_and_Visas_Data: Array<StaffingTypes.IChange_Passports_and_Visas_Data>;
    }
    export interface IChange_Licenses_Data {
        Person_Reference: StaffingTypes.IPerson_Reference;
        Universal_ID_Reference: StaffingTypes.IUniversal_ID_Reference;
        License_Identification_Data: StaffingTypes.ILicense_Identification_Data;
    }
    export interface IChange_Licenses {
        Person_Reference: StaffingTypes.IPerson_Reference;
        Change_Licenses_Data: Array<StaffingTypes.IChange_Licenses_Data>;
    }
    export interface IChange_Other_IDs_Data {
        Person_Reference: StaffingTypes.IPerson_Reference;
        Universal_ID_Reference: StaffingTypes.IUniversal_ID_Reference;
        Custom_Identification_Data: StaffingTypes.ICustom_Identification_Data;
    }
    export interface IChange_Other_IDs {
        Person_Reference: StaffingTypes.IPerson_Reference;
        Change_Other_IDs_Data: Array<StaffingTypes.IChange_Other_IDs_Data>;
    }
    export interface IChange_Preferred_Name_Data {
        Person_Reference: StaffingTypes.IPerson_Reference;
        Universal_ID_Reference: StaffingTypes.IUniversal_ID_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Use_Legal_Name_As_Preferred_Name: boolean;
        Name_Data: {
            Country_Reference: StaffingTypes.ICountry_Reference;
            Prefix_Data: StaffingTypes.IPrefix_Data;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            First_Name: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Middle_Name: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Last_Name: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Secondary_Last_Name: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Tertiary_Last_Name: string;
            Local_Name_Detail_Data: StaffingTypes.ILocal_Name_Detail_Data;
            Suffix_Data: StaffingTypes.ISuffix_Data;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Full_Name_for_Singapore_and_Malaysia: string;
        };
    }
    export interface IChange_Preferred_Name {
        Person_Reference: StaffingTypes.IPerson_Reference;
        Change_Preferred_Name_Data: StaffingTypes.IChange_Preferred_Name_Data;
    }
    export interface IChange_Legal_Name_Data {
        Person_Reference: StaffingTypes.IPerson_Reference;
        Universal_ID_Reference: StaffingTypes.IUniversal_ID_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        Name_Data: {
            Country_Reference: StaffingTypes.ICountry_Reference;
            Prefix_Data: StaffingTypes.IPrefix_Data;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            First_Name: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Middle_Name: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Last_Name: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Secondary_Last_Name: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Tertiary_Last_Name: string;
            Local_Name_Detail_Data: StaffingTypes.ILocal_Name_Detail_Data;
            Suffix_Data: StaffingTypes.ISuffix_Data;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Full_Name_for_Singapore_and_Malaysia: string;
        };
    }
    export interface IChange_Legal_Name {
        Person_Reference: StaffingTypes.IPerson_Reference;
        Change_Legal_Name_Data: StaffingTypes.IChange_Legal_Name_Data;
    }
    export interface IHiring_Restrictions_Request_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISet_Hiring_Restrictions_Data {
        Supervisory_Organization_Reference: StaffingTypes.ISupervisory_Organization_Reference;
        Hiring_Restrictions_Request_Reason_Reference: StaffingTypes.IHiring_Restrictions_Request_Reason_Reference;
        Position_Group_Restrictions_Data: StaffingTypes.IPosition_Group_Restrictions_Data;
        Request_Default_Compensation_Sub_Process: StaffingTypes.IRequest_Default_Compensation_Sub_Process;
    }
    export interface IHiring_Restrictions_Edit_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEdit_Hiring_Restrictions_Data {
        Supervisory_Organization_Reference: StaffingTypes.ISupervisory_Organization_Reference;
        Hiring_Restrictions_Edit_Reason_Reference: StaffingTypes.IHiring_Restrictions_Edit_Reason_Reference;
        Position_Group_Restrictions_Data: StaffingTypes.IPosition_Group_Restrictions_Data;
        Request_Default_Compensation_Sub_Process: StaffingTypes.IRequest_Default_Compensation_Sub_Process;
    }
    export interface IHire_Event_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IBusiness_Object_Additional_Data {}
    export interface IWorker_Custom_Object_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        Worker_Reference: StaffingTypes.IWorker_Reference;
        Business_Object_Additional_Data: StaffingTypes.IBusiness_Object_Additional_Data;
    }
    export interface IAdditional_Data {}
    export interface IPosition_Restrictions_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPosition_Restrictions_Custom_Object_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        Position_Restrictions_Reference: StaffingTypes.IPosition_Restrictions_Reference;
        Business_Object_Additional_Data: Array<StaffingTypes.IBusiness_Object_Additional_Data>;
    }
    export interface IFrom_Organization_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPosition_to_Move_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWorker_for_Position_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IMove_Workers_By_Organization_Position_Data {
        Position_to_Move_Reference: StaffingTypes.IPosition_to_Move_Reference;
        Worker_for_Position_Reference: StaffingTypes.IWorker_for_Position_Reference;
    }
    export interface ITo_Organization_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IMove_Workers_By_Organization_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        From_Organization_Reference: StaffingTypes.IFrom_Organization_Reference;
        Move_Workers_By_Organization_Position_Data: Array<StaffingTypes.IMove_Workers_By_Organization_Position_Data>;
        To_Organization_Reference: StaffingTypes.ITo_Organization_Reference;
    }
    export interface IMove_Workers_By_Organization_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IChange_Organization_Assignments_Data {
        Position_Reference: StaffingTypes.IPosition_Reference;
        Worker_Reference: StaffingTypes.IWorker_Reference;
        Position_Organization_Assignments_Data: {
            Company_Assignments_Reference: Array<StaffingTypes.ICompany_Assignments_Reference>;
            Cost_Center_Assignments_Reference: Array<StaffingTypes.ICost_Center_Assignments_Reference>;
            Region_Assignments_Reference: Array<StaffingTypes.IRegion_Assignments_Reference>;
            Custom_Organization_Assignment_Data: Array<StaffingTypes.ICustom_Organization_Assignment_Data>;
            Fund_Assignments_Reference: Array<StaffingTypes.IFund_Assignments_Reference>;
            Grant_Assignments_Reference: Array<StaffingTypes.IGrant_Assignments_Reference>;
            Program_Assignments_Reference: Array<StaffingTypes.IProgram_Assignments_Reference>;
            Business_Unit_Assignments_Reference: Array<StaffingTypes.IBusiness_Unit_Assignments_Reference>;
            Gift_Assignments_Reference: Array<StaffingTypes.IGift_Assignments_Reference>;
        };
        Check_Position_Budget_Sub_Process: StaffingTypes.ICheck_Position_Budget_Sub_Process;
    }
    export interface IChange_Organization_Assignments_Event_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEffective_Timezone_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEvent_Target_Assignee_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAssign_Roles_Event_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        Effective_Timezone_Reference: StaffingTypes.IEffective_Timezone_Reference;
        Event_Target_Assignee_Reference: StaffingTypes.IEvent_Target_Assignee_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Remove_All_Role_Assignments_for_Event_Target_Assignee: boolean;
        Assign_Roles_Role_Assignment_Data: Array<StaffingTypes.IAssign_Roles_Role_Assignment_Data>;
    }
    export interface IStudent_Employment_Eligibility_Event_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IStudent_Employment_Eligibility_Reason_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Reason_for_Ineligibility: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Critical: boolean;
    }
    export interface IStudent_Employment_Eligibility_Event_Data {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Eligible: boolean;
        Student_Employment_Eligibility_Reason_Data: Array<StaffingTypes.IStudent_Employment_Eligibility_Reason_Data>;
    }
    export interface IPre-Hire_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IParent_Event_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPosition_Restriction_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPosition_Details_Data {
        Job_Profile_Reference: StaffingTypes.IJob_Profile_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Position_Title: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Business_Title: string;
        Location_Reference: StaffingTypes.ILocation_Reference;
        Work_Space_Reference: StaffingTypes.IWork_Space_Reference;
        Position_Time_Type_Reference: StaffingTypes.IPosition_Time_Type_Reference;
        Work_Shift_Reference: StaffingTypes.IWork_Shift_Reference;
        Work_Hours_Profile_Reference: StaffingTypes.IWork_Hours_Profile_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Default_Hours: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Scheduled_Hours: totalDigits,fractionDigits;
        Working_Time_Frequency_Reference: StaffingTypes.IWorking_Time_Frequency_Reference;
        Working_Time_Unit_Reference: StaffingTypes.IWorking_Time_Unit_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Working_Time_Value: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Specify_Paid_FTE: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Paid_FTE: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Specify_Working_FTE: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Working_FTE: totalDigits,minInclusive,fractionDigits;
        Pay_Rate_Type_Reference: StaffingTypes.IPay_Rate_Type_Reference;
        Additional_Job_Classifications_Reference: Array<StaffingTypes.IAdditional_Job_Classifications_Reference>;
        Company_Insider_Type_Reference: Array<StaffingTypes.ICompany_Insider_Type_Reference>;
        Annual_Work_Period_Reference: StaffingTypes.IAnnual_Work_Period_Reference;
        Disbursement_Plan_Period_Reference: StaffingTypes.IDisbursement_Plan_Period_Reference;
        Work_Study_Reference: StaffingTypes.IWork_Study_Reference;
        Workers__Compensation_Code_Override_Reference: StaffingTypes.IWorkers__Compensation_Code_Override_Reference;
        Position_External_ID_Data: StaffingTypes.IPosition_External_ID_Data;
    }
    export interface IStudent_Employment_Eligibility_Event {
        Student_Employment_Eligibility_Event_Reference: StaffingTypes.IStudent_Employment_Eligibility_Event_Reference;
        Pre-Hire_Reference: StaffingTypes.IPre-Hire_Reference;
        Worker_Reference: StaffingTypes.IWorker_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Proposed_Worker_ID: string;
        Parent_Event_Reference: StaffingTypes.IParent_Event_Reference;
        Employee_Type_Reference: StaffingTypes.IEmployee_Type_Reference;
        Supervisory_Organization_Reference: StaffingTypes.ISupervisory_Organization_Reference;
        Manager_Reference: StaffingTypes.IManager_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Event_Effective_Date: date;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Total_Scheduled_Hours: totalDigits,fractionDigits;
        Job_Requisition_Reference: StaffingTypes.IJob_Requisition_Reference;
        Position_Restriction_Reference: StaffingTypes.IPosition_Restriction_Reference;
        Position_Details_Data: Array<StaffingTypes.IPosition_Details_Data>;
    }
    export interface INotice_Period_Eligibility_Rule_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICondition_Rule_Category_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAnd_Or_Operator_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IRelational_Operator_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICondition_Entry_Option_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISource_External_Field_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISource_Condition_Rule_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IFilter_TimeZone_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IFilter_DateTimeZone {
        /** urn:com.workday/bsvc#xsd:dateTime(undefined) */
        Filter_DateTime: dateTime;
        Filter_TimeZone_Reference: StaffingTypes.IFilter_TimeZone_Reference;
    }
    export interface ITarget_External_Field_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ITarget_Instance_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICondition_Item_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Order: maxLength;
        And_Or_Operator_Reference: StaffingTypes.IAnd_Or_Operator_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Open_Parentheses: string;
        Relational_Operator_Reference: StaffingTypes.IRelational_Operator_Reference;
        Condition_Entry_Option_Reference: StaffingTypes.ICondition_Entry_Option_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Close_Parentheses: string;
        Source_External_Field_Reference: StaffingTypes.ISource_External_Field_Reference;
        Source_Condition_Rule_Reference: StaffingTypes.ISource_Condition_Rule_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Filter_Boolean: boolean;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Filter_Date: date;
        Filter_DateTimeZone: StaffingTypes.IFilter_DateTimeZone;
        /** urn:com.workday/bsvc#xsd:time(undefined) */
        Filter_Time: time;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Filter_Number: totalDigits,fractionDigits;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Filter_Text: string;
        Target_External_Field_Reference: StaffingTypes.ITarget_External_Field_Reference;
        Target_Instance_Reference: Array<StaffingTypes.ITarget_Instance_Reference>;
    }
    export interface ICountries_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICondition_Rule_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Condition_Rule_ID: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Rule_Description: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Comment: string;
        Condition_Rule_Category_Reference: Array<StaffingTypes.ICondition_Rule_Category_Reference>;
        Condition_Item_Data: Array<StaffingTypes.ICondition_Item_Data>;
        Countries_Reference: Array<StaffingTypes.ICountries_Reference>;
    }
    export interface INotice_Period_Eligibility_Rule_Data {
        Condition_Rule_Data: StaffingTypes.ICondition_Rule_Data;
    }
    export interface IMaintain_Notice_Periods_For_Country_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEligibility_Rule_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface INotice_Period_Line_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Order: maxLength;
        Eligibility_Rule_Reference: StaffingTypes.IEligibility_Rule_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Has_Notice_Period: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        For_Employer: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        For_Employee: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Duration: totalDigits,minInclusive,fractionDigits;
        Unit_Reference: {
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string>;
        };
        Adjustment_Reference: StaffingTypes.IAdjustment_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Inactive: boolean;
    }
    export interface IMaintain_Notice_Periods_For_Country_Data {
        Country_Reference: StaffingTypes.ICountry_Reference;
        Notice_Period_Line_Data: Array<StaffingTypes.INotice_Period_Line_Data>;
    }
    export interface INotice_Period_Eligibility_Rule {
        Notice_Period_Eligibility_Rule_Reference: StaffingTypes.INotice_Period_Eligibility_Rule_Reference;
        Notice_Period_Eligibility_Rule_Data: Array<StaffingTypes.INotice_Period_Eligibility_Rule_Data>;
    }
    export interface IMaintain_Notice_Periods_For_Country {
        Maintain_Notice_Periods_For_Country_Reference: StaffingTypes.IMaintain_Notice_Periods_For_Country_Reference;
        Maintain_Notice_Periods_For_Country_Data: StaffingTypes.IMaintain_Notice_Periods_For_Country_Data;
    }
    export interface IPut_Edit_Notice_Periods_Event_Data {
        Employee_Reference: StaffingTypes.IEmployee_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        Employer_Notice_Period_Data: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Derive_Notice_Period: boolean;
            Override_Notice_Period_Data: StaffingTypes.IOverride_Notice_Period_Data;
        };
        Employee_Notice_Period_Data: {
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Derive_Notice_Period: boolean;
            Override_Notice_Period_Data: StaffingTypes.IOverride_Notice_Period_Data;
        };
    }
    export interface IEdit_Notice_Periods_Event_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface INotice_Period_Target_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface INotice_Period_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface INotice_Period_Unit_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDate_And_Time_Adjustment_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IOverridden_Notice_Period_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface INotice_Period_Data {
        Notice_Period_Reference: StaffingTypes.INotice_Period_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Notice_Period_Duration: totalDigits,minInclusive,fractionDigits;
        Notice_Period_Unit_Reference: StaffingTypes.INotice_Period_Unit_Reference;
        Date_And_Time_Adjustment_Reference: StaffingTypes.IDate_And_Time_Adjustment_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Notice_Period_Is_Custom: boolean;
        Overridden_Notice_Period_Reference: StaffingTypes.IOverridden_Notice_Period_Reference;
    }
    export interface INotice_Period_Data_for_Notice_Period_Target {
        Notice_Period_Target_Reference: StaffingTypes.INotice_Period_Target_Reference;
        Location_Reference: StaffingTypes.ILocation_Reference;
        Employer_Notice_Period_Data: Array<{
            Notice_Period_Data: Array<StaffingTypes.INotice_Period_Data>;
        }>;
        Employee_Notice_Period_Data: Array<{
            Notice_Period_Data: Array<StaffingTypes.INotice_Period_Data>;
        }>;
    }
    export interface IMaintain_Probation_Periods_For_Country_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProbation_Period_Eligibility_Rule_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProbation_Period_Unit_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IMaximum_Probation_Unit_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IMaximum_Probation_Period_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Maximum_Probation_Duration: totalDigits,minInclusive,fractionDigits;
        Maximum_Probation_Unit_Reference: StaffingTypes.IMaximum_Probation_Unit_Reference;
    }
    export interface IReview_Probation_Unit_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IReview_Probation_Period_Data {
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Review_Probation_Duration: totalDigits,minInclusive,fractionDigits;
        Review_Probation_Unit_Reference: StaffingTypes.IReview_Probation_Unit_Reference;
    }
    export interface IProbation_Period_For_Country_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Order: maxLength;
        Probation_Period_Eligibility_Rule_Reference: StaffingTypes.IProbation_Period_Eligibility_Rule_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Probation_Period_Duration: totalDigits,minInclusive,fractionDigits;
        Probation_Period_Unit_Reference: StaffingTypes.IProbation_Period_Unit_Reference;
        Maximum_Probation_Period_Data: Array<StaffingTypes.IMaximum_Probation_Period_Data>;
        Review_Probation_Period_Data: Array<StaffingTypes.IReview_Probation_Period_Data>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Inactive: boolean;
    }
    export interface IMaintain_Probation_Periods_For_Country_Data {
        Country_Reference: StaffingTypes.ICountry_Reference;
        Probation_Period_For_Country_Data: Array<StaffingTypes.IProbation_Period_For_Country_Data>;
    }
    export interface IMaintain_Probation_Periods_For_Country {
        Maintain_Probation_Periods_For_Country_Reference: StaffingTypes.IMaintain_Probation_Periods_For_Country_Reference;
        Maintain_Probation_Periods_For_Country_Data: StaffingTypes.IMaintain_Probation_Periods_For_Country_Data;
    }
    export interface IProbation_Period_For_Country_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IStudent_Employment_Eligibility_Rule_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IStudent_Employment_Eligibility_Rule_Data {
        Condition_Rule_Data: Array<StaffingTypes.ICondition_Rule_Data>;
    }
    export interface IStudent_Employment_Eligibility_Rule {
        Student_Employment_Eligibility_Rule_Reference: StaffingTypes.IStudent_Employment_Eligibility_Rule_Reference;
        Student_Employment_Eligibility_Rule_Data: Array<StaffingTypes.IStudent_Employment_Eligibility_Rule_Data>;
    }
    export interface IProbation_Period_Eligibility_Rule_Data {
        Condition_Rule_Data: StaffingTypes.ICondition_Rule_Data;
    }
    export interface IProbation_Period_Eligibility_Rule {
        Probation_Period_Eligibility_Rule_Reference: StaffingTypes.IProbation_Period_Eligibility_Rule_Reference;
        Probation_Period_Eligibility_Rule_Data: Array<StaffingTypes.IProbation_Period_Eligibility_Rule_Data>;
    }
    export interface IApplication_Instance_Related_Exceptions_Data {
        Exceptions_Data: Array<StaffingTypes.IExceptions_Data>;
    }
    export interface IStudent_Employment_Eligibility_Rule_Set_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAcademic_Period_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IAcademic_Period_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICondition_Rule_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IStudent_Employment_Eligibility_Rule_Subedit_Data {
        Condition_Rule_Reference: StaffingTypes.ICondition_Rule_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Student_Employment_Eligibility_Rule_Reference: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Reason_for_Ineligibility: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Critical_Severity: boolean;
    }
    export interface IStudent_Employment_Eligibility_Rule_Set_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Student_Employment_Eligibility_Rule_Set_Name: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Student_Employment_Eligibility_Rule_Set_Description: string;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Inactive: boolean;
        Job_Profile_Reference: Array<StaffingTypes.IJob_Profile_Reference>;
        Job_Family_Reference: Array<StaffingTypes.IJob_Family_Reference>;
        Academic_Level_Reference: Array<StaffingTypes.IAcademic_Level_Reference>;
        Academic_Period_Reference: Array<StaffingTypes.IAcademic_Period_Reference>;
        Academic_Period_Type_Reference: Array<StaffingTypes.IAcademic_Period_Type_Reference>;
        Student_Employment_Eligibility_Rule_Subedit_Data: Array<StaffingTypes.IStudent_Employment_Eligibility_Rule_Subedit_Data>;
    }
    export interface IStudent_Employment_Eligibility_Rule_Set_Request_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IStudent_Employment_Eligibility_Rule_Set {
        Student_Employment_Eligibility_Rule_Set_Reference: StaffingTypes.IStudent_Employment_Eligibility_Rule_Set_Reference;
        Student_Employment_Eligibility_Rule_Set_Data: Array<StaffingTypes.IStudent_Employment_Eligibility_Rule_Set_Data>;
    }
    export interface IWork_Space_Change_Event_Data {
        Position_Reference: StaffingTypes.IPosition_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        Work_Space_Reference: StaffingTypes.IWork_Space_Reference;
    }
    export interface IWork_Space_Change_Event_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IFreeze_Event_Data {
        Reason_Reference: StaffingTypes.IReason_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Freeze_Date: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Frozen_Position: boolean;
    }
    export interface IFreeze_Position_Data {
        Position_Reference: StaffingTypes.IPosition_Reference;
        Freeze_Event_Data: StaffingTypes.IFreeze_Event_Data;
    }
    export interface IPosition_Group_Freeze_Event_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IWorkers_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProbation_Periods_For_Worker_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEmployee_Probation_Period_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProbation_Period_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICustom_Probation_Period_Unit_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IExtended_Probation_Period_Unit_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICustom_Review_Probation_Period_Unit_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProbation_Period_For_Worker_Data {
        Worker_Reference: StaffingTypes.IWorker_Reference;
        Position_Reference: StaffingTypes.IPosition_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Start_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        End_Date: date;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Extended_End_Date: date;
        Employee_Probation_Period_Type_Reference: StaffingTypes.IEmployee_Probation_Period_Type_Reference;
        Probation_Period_Reason_Reference: StaffingTypes.IProbation_Period_Reason_Reference;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Note: string;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Custom_Probation_Period_Duration: totalDigits,minInclusive,fractionDigits;
        Custom_Probation_Period_Unit_Reference: StaffingTypes.ICustom_Probation_Period_Unit_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Extended_Probation_Period_Duration: totalDigits,minInclusive,fractionDigits;
        Extended_Probation_Period_Unit_Reference: StaffingTypes.IExtended_Probation_Period_Unit_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Custom_Review_Probation_Period_Date: date;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Custom_Review_Probation_Period_Duration: totalDigits,minInclusive,fractionDigits;
        Custom_Review_Probation_Period_Unit_Reference: StaffingTypes.ICustom_Review_Probation_Period_Unit_Reference;
    }
    export interface IProbation_Periods_For_Workers {
        Probation_Periods_For_Worker_Reference: StaffingTypes.IProbation_Periods_For_Worker_Reference;
        Probation_Period_For_Worker_Data: Array<StaffingTypes.IProbation_Period_For_Worker_Data>;
    }
    export interface IMark_No_Show_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEligible_Rehire_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface INo_Show_Employee_Data {
        Employee_Reference: StaffingTypes.IEmployee_Reference;
        Mark_No_Show_Reference: StaffingTypes.IMark_No_Show_Reference;
        Eligible_Rehire_Reference: StaffingTypes.IEligible_Rehire_Reference;
    }
    export interface IProbation_Period_Outcomes_For_Country_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProbation_Period_Actions_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProbation_Period_Outcomes_Data {
        Country_Reference: StaffingTypes.ICountry_Reference;
        Probation_Period_Outcome_Data: Array<{
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Probation_Period_Outcome_Name: string;
            Probation_Period_Actions_Reference: Array<StaffingTypes.IProbation_Period_Actions_Reference>;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Inactive: boolean;
        }>;
    }
    export interface IProbation_Period_Outcome_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPosition_Matrix_Organization_Detail_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        Matrix_Organization_Reference: StaffingTypes.IMatrix_Organization_Reference;
    }
    export interface IPosition_Matrix_Organization_Data {
        Position_Reference: StaffingTypes.IPosition_Reference;
        Position_Matrix_Organization_Detail_Data: StaffingTypes.IPosition_Matrix_Organization_Detail_Data;
    }
    export interface IAssign_Matrix_Organization_Business_Process_Data {
        Worker_Reference: StaffingTypes.IWorker_Reference;
        Position_Matrix_Organization_Data: StaffingTypes.IPosition_Matrix_Organization_Data;
    }
    export interface IMatrix_Organization_Event_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProbation_Period_Outcomes {
        Probation_Period_Outcomes_For_Country_Reference: StaffingTypes.IProbation_Period_Outcomes_For_Country_Reference;
        Probation_Period_Outcomes_Data: Array<StaffingTypes.IProbation_Period_Outcomes_Data>;
    }
    export interface IEmployee_Contract_Custom_Object_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        Employee_Contract_Reference: StaffingTypes.IEmployee_Contract_Reference;
        Business_Object_Additional_Data: StaffingTypes.IBusiness_Object_Additional_Data;
    }
    export interface IRemove_Matrix_Organization_Detail_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        Matrix_Organization_Reference: StaffingTypes.IMatrix_Organization_Reference;
    }
    export interface IRemove_Matrix_Organization_Position_Data {
        Position_Reference: StaffingTypes.IPosition_Reference;
        Remove_Matrix_Organization_Detail_Data: StaffingTypes.IRemove_Matrix_Organization_Detail_Data;
    }
    export interface IRemove_Matrix_Organization_Business_Process_Data {
        Worker_Reference: StaffingTypes.IWorker_Reference;
        Remove_Matrix_Organization_Position_Data: StaffingTypes.IRemove_Matrix_Organization_Position_Data;
    }
    export interface IRemove_from_Matrix_Organization_Event_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IDelete_Worker_Data {
        Worker_Document_Reference: StaffingTypes.IWorker_Document_Reference;
    }
    export interface IRole_Assigner_Data {
        Effective_Timezone_Reference: StaffingTypes.IEffective_Timezone_Reference;
        Role_Assigner_Reference: StaffingTypes.IRole_Assigner_Reference;
        Role_Assignment_Data: Array<{
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Delete: boolean;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Update: boolean;
            Organization_Role_Reference: StaffingTypes.IOrganization_Role_Reference;
            Role_Assignee_Reference: Array<StaffingTypes.IRole_Assignee_Reference>;
        }>;
    }
    export interface IRole_Assigner {
        Role_Assigner_Reference: StaffingTypes.IRole_Assigner_Reference;
        Role_Assigner_Data: StaffingTypes.IRole_Assigner_Data;
    }
    export interface IGlobal_Staffing_Eligibility_Rule_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IGlobal_Staffing_Eligibility_Rule_Data {
        Condition_Rule_Data: StaffingTypes.ICondition_Rule_Data;
    }
    export interface IGlobal_Staffing_Eligibility_Rule {
        Global_Staffing_Eligibility_Rule_Reference: StaffingTypes.IGlobal_Staffing_Eligibility_Rule_Reference;
        Global_Staffing_Eligibility_Rule_Data: Array<StaffingTypes.IGlobal_Staffing_Eligibility_Rule_Data>;
    }
    export interface IEmployee_Contracts_For_Country_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IMaintain_Employee_Contract_Rules_For_Country_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IMaximum_Combined_Contract_Unit_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ISchedule_Review_Unit_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEmployee_Contract_Rule_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Order: maxLength;
        Global_Staffing_Eligibility_Rule_Reference: StaffingTypes.IGlobal_Staffing_Eligibility_Rule_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Maximum_Contract_Renewals_Allowed: totalDigits,minInclusive,fractionDigits;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Allow_Unlimited_Renewals: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Count_Extensions_as_Renewals: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Maximum_Combined_Contract_Duration: totalDigits,minInclusive,fractionDigits;
        Maximum_Combined_Contract_Unit_Reference: StaffingTypes.IMaximum_Combined_Contract_Unit_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Schedule_Review_Duration: totalDigits,minInclusive,fractionDigits;
        Schedule_Review_Unit_Reference: StaffingTypes.ISchedule_Review_Unit_Reference;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Inactive: boolean;
    }
    export interface IMaintain_Employee_Contract_Rules_For_Country_Data {
        Country_Reference: StaffingTypes.ICountry_Reference;
        Employee_Contract_Rule_Data: Array<StaffingTypes.IEmployee_Contract_Rule_Data>;
    }
    export interface IMaintain_Employee_Contract_Rules_For_Country {
        Maintain_Employee_Contract_Rules_For_Country_Reference: StaffingTypes.IMaintain_Employee_Contract_Rules_For_Country_Reference;
        Maintain_Employee_Contract_Rules_For_Country_Data: StaffingTypes.IMaintain_Employee_Contract_Rules_For_Country_Data;
    }
    export interface IRequest_Critera {}
    export interface IProbation_Period_Action_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IProbation_Period_Outcome {
        Probation_Period_Outcome_Reference: StaffingTypes.IProbation_Period_Outcome_Reference;
        Probation_Period_Outcome_Data: Array<{
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            ID: string;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            Probation_Period_Outcome_Name: string;
            Probation_Period_Action_Reference: Array<StaffingTypes.IProbation_Period_Action_Reference>;
            /** urn:com.workday/bsvc#xsd:boolean(undefined) */
            Inactive: boolean;
            Country_Reference: StaffingTypes.ICountry_Reference;
        }>;
    }
    export interface IFSE_Worker_Type_Grouping_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IFSE_Worker_Category_Criteria_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        FSE_Worker_Category_Criteria_ID: string;
        FSE_Worker_Type_Grouping_Reference: StaffingTypes.IFSE_Worker_Type_Grouping_Reference;
        Job_Profile_Reference: Array<StaffingTypes.IJob_Profile_Reference>;
        Job_Family_Reference: Array<StaffingTypes.IJob_Family_Reference>;
    }
    export interface IFSE_Worker_Category_Criteria_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IFSE_Worker_Category_Criteria {
        FSE_Worker_Category_Criteria_Reference: StaffingTypes.IFSE_Worker_Category_Criteria_Reference;
        FSE_Worker_Category_Criteria_Data: Array<StaffingTypes.IFSE_Worker_Category_Criteria_Data>;
    }
    export interface IAcademic_Standing_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IStudent_Load_Status_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IEnrolled_Unit_Type_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IClass_Standing_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPre_Hire_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IPersonal_Profile_Data {
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Date_of_Birth: date;
        Gender_Reference: StaffingTypes.IGender_Reference;
        Ethnicity_Reference: Array<StaffingTypes.IEthnicity_Reference>;
        Citizenship_Status_Reference: Array<StaffingTypes.ICitizenship_Status_Reference>;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Hispanic_or_Latino: boolean;
    }
    export interface IGeneric_Military_Service_Data {
        Military_Service_Information_Data: Array<StaffingTypes.IMilitary_Service_Information_Data>;
    }
    export interface IStudent_Person_Data {
        Person_Name_Data: StaffingTypes.IPerson_Name_Data;
        Contact_Information_Data: StaffingTypes.IContact_Information_Data;
        Personal_Profile_Data: StaffingTypes.IPersonal_Profile_Data;
        Person_Identification_Data: StaffingTypes.IPerson_Identification_Data;
        Personal_Information_Data: {
            Marital_Status_Reference: Array<StaffingTypes.IMarital_Status_Reference>;
            Country_of_Birth_Reference: StaffingTypes.ICountry_of_Birth_Reference;
            Region_of_Birth_Reference: StaffingTypes.IRegion_of_Birth_Reference;
            /** urn:com.workday/bsvc#xsd:string(undefined) */
            City_of_Birth: string;
            Generic_Military_Service_Data: Array<StaffingTypes.IGeneric_Military_Service_Data>;
        };
    }
    export interface IStudent_Photo_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Filename: maxLength;
        /** urn:com.workday/bsvc#xsd:base64Binary(undefined) */
        File: base64Binary;
    }
    export interface IExternal_Student_Student_Subedit_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Student_ID: string;
        Worker_Reference: StaffingTypes.IWorker_Reference;
        Pre_Hire_Reference: StaffingTypes.IPre_Hire_Reference;
        Student_Person_Data: StaffingTypes.IStudent_Person_Data;
        Student_Photo_Data: StaffingTypes.IStudent_Photo_Data;
    }
    export interface IExternal_Student_Student_Data {
        Student_Reference: StaffingTypes.IStudent_Reference;
        External_Student_Student_Subedit_Data: StaffingTypes.IExternal_Student_Student_Subedit_Data;
    }
    export interface IExternal_Student_Data {
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Student_Active: boolean;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Do_Not_Release_Directory_Information: boolean;
        Academic_Unit_Reference: StaffingTypes.IAcademic_Unit_Reference;
        Academic_Level_Reference: StaffingTypes.IAcademic_Level_Reference;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Expected_Graduation_Date: date;
        /** urn:com.workday/bsvc#xsd:boolean(undefined) */
        Work-Study_Eligible: boolean;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        GPA: totalDigits,minInclusive,fractionDigits;
        Academic_Standing_Reference: StaffingTypes.IAcademic_Standing_Reference;
        Student_Load_Status_Reference: StaffingTypes.IStudent_Load_Status_Reference;
        /** urn:com.workday/bsvc#xsd:decimal(undefined) */
        Enrolled_Units: totalDigits,minInclusive,fractionDigits;
        Enrolled_Unit_Type_Reference: StaffingTypes.IEnrolled_Unit_Type_Reference;
        Class_Standing_Reference: StaffingTypes.IClass_Standing_Reference;
        External_Student_Student_Data: StaffingTypes.IExternal_Student_Student_Data;
    }
    export interface IImport_Process_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IHeader_Instance_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IHire_Employee_Information_HV {
        Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
        Hire_Employee_Data: StaffingTypes.IHire_Employee_Data;
    }
    export interface IContract_Contingent_Worker_Information_HV {
        Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
        Contract_Contingent_Worker_Data: StaffingTypes.IContract_Contingent_Worker_Data;
    }
    export interface IChange_Job_Reason_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface ICurrent_Position_Reference {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        ID: string>;
    }
    export interface IChange_Job_Data_for_Swap_Positions {
        Worker_Reference: StaffingTypes.IWorker_Reference;
        Current_Position_Reference: StaffingTypes.ICurrent_Position_Reference;
        Proposed_Position_Reference: StaffingTypes.IProposed_Position_Reference;
        Propose_Compensation_Sub_Process: StaffingTypes.IPropose_Compensation_Sub_Process;
        Request_One_Time_Payment_Sub_Process: StaffingTypes.IRequest_One_Time_Payment_Sub_Process;
        Request_Stock_Grant_Sub_Process: StaffingTypes.IRequest_Stock_Grant_Sub_Process;
        Assign_Pay_Group_Sub_Process: {
            Business_Sub_Process_Parameters: {
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Auto_Complete: boolean;
                /** urn:com.workday/bsvc#xsd:boolean(undefined) */
                Skip: boolean;
                Business_Process_Comment_Data: StaffingTypes.IBusiness_Process_Comment_Data;
                Business_Process_Attachment_Data: Array<StaffingTypes.IBusiness_Process_Attachment_Data>;
            };
            Assign_Pay_Group_Data: {
                Pay_Group_Reference: {
                    /** urn:com.workday/bsvc#xsd:string(undefined) */
                    ID: string>;
                };
                Additional_Positions_for_Pay_Group_Assignment_Reference: Array<StaffingTypes.IAdditional_Positions_for_Pay_Group_Assignment_Reference>;
            };
        };
        Assign_Matrix_Organization_Sub_Process: StaffingTypes.IAssign_Matrix_Organization_Sub_Process;
        Change_Personal_Information_Sub_Process: StaffingTypes.IChange_Personal_Information_Sub_Process;
        Maintain_Employee_Contracts_Sub_Process: StaffingTypes.IMaintain_Employee_Contracts_Sub_Process;
        Assign_Organization_Roles_Sub_Process: StaffingTypes.IAssign_Organization_Roles_Sub_Process;
        Assign_Roles_Sub_Process: StaffingTypes.IAssign_Roles_Sub_Process;
        Assign_Superior_Organization_Sub_Process: StaffingTypes.IAssign_Superior_Organization_Sub_Process;
        Assign_Costing_Allocation_Sub_Process: StaffingTypes.IAssign_Costing_Allocation_Sub_Process;
        Create_Subordinate_Sub_Process: StaffingTypes.ICreate_Subordinate_Sub_Process;
        Onboarding_Setup_Sub_Process: StaffingTypes.IOnboarding_Setup_Sub_Process;
        Manage_Union_Membership_Sub_Process: StaffingTypes.IManage_Union_Membership_Sub_Process;
    }
    export interface IMass_Swap_Positions_Data {
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Name: string;
        /** urn:com.workday/bsvc#xsd:string(undefined) */
        Description: string;
        /** urn:com.workday/bsvc#xsd:date(undefined) */
        Effective_Date: date;
        Change_Job_Reason_Reference: StaffingTypes.IChange_Job_Reason_Reference;
        Change_Job_Data_for_Swap_Positions: Array<StaffingTypes.IChange_Job_Data_for_Swap_Positions>;
    }
    export interface ITerminate_Employee_Information_HV {
        Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
        Terminate_Employee_Data: StaffingTypes.ITerminate_Employee_Data;
    }
    export interface IEnd_Contingent_Worker_Contract_Information_HV {
        Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
        End_Contingent_Worker_Contract_Data: StaffingTypes.IEnd_Contingent_Worker_Contract_Data;
    }
    export interface IChange_Job_Information_HV {
        Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
        Change_Job_Data: StaffingTypes.IChange_Job_Data;
    }
    export interface IAssign_Matrix_Organization_Information_HV {
        Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
        Assign_Matrix_Organization_Business_Process_Data: StaffingTypes.IAssign_Matrix_Organization_Business_Process_Data;
    }
    export interface IRemove_Matrix_Organization_Information_HV {
        Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
        Remove_Matrix_Organization_Business_Process_Data: StaffingTypes.IRemove_Matrix_Organization_Business_Process_Data;
    }
    export interface IChange_Organizaton_Assignments_HV {
        Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
        Change_Organization_Assignments_Data: StaffingTypes.IChange_Organization_Assignments_Data;
    }
    export interface IMove_Workers_By_Organization_HV {
        Business_Process_Parameters: StaffingTypes.IBusiness_Process_Parameters;
        Move_Workers_By_Organization_Data: StaffingTypes.IMove_Workers_By_Organization_Data;
    }
}
