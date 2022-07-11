class ApplicationException extends Error {
  constructor(message = "An unexpected error ocurred.") {
    super(message);
  }
}

export default ApplicationException;
