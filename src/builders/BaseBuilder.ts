class BaseBuilder {
  build(): any {
    return Object.assign(this, {});
  }

  public withParam(paramName: string, value: any):any{
    if (Object.keys(this).indexOf(paramName) !== -1)
    {
        this[paramName] = value;
    }
    return this;
  }
}

export default BaseBuilder;
