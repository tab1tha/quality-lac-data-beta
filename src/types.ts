/** Callback type for the DropzoneUploader */
export type FilesCallback = (arg: DropzoneUploadedFiles) => void;
type DropzoneUploadedFiles = {description: string, acceptedFiles: Array<File>};

/** Callback types for the Uploader */
export type UploadedFilesCallback = (arg: UploadedFile) => void;
export type UploadedFile = {name: string, fileText: string, description: string}

/** Used for individual data rows */
export type DataRow = Map<string, Object>;

/** Type that maps file types (e.g. Header, Episodes) to the data (arrays of DataRows) */
export type ParsedData = Map<string, Array<DataRow>>;

export type ErrorCode = string;
export type ErrorDefinition = Map<string, unknown>
export type ErrorDefinitions = Map<ErrorCode, ErrorDefinition>;

/** Error incidences are described by table name -> row index -> list of error codes */
export type ErrorIncidences = Map<string, Map<number, Array<ErrorCode>>>;

/** This type contains all the information from a successful validation in Python */
export type ValidatedData = {
    data: ParsedData,
    errors: ErrorIncidences,
    errorDefinitions: ErrorDefinitions,
}

/** 
 * Type used for error locations for each file 
 * Has to map to string to be hashable in the Set type
 * 
 * e.g. Header -> {"[0, CHILD]", "[3, DEC"} */
export type ErrorLocations = Map<string, Set<string>>

declare global {
    interface Window {
        pyodide: any,
        loadPyodide: any,
    }
};