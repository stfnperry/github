import Patch from './patch';
  static createNull() {
    return new this(nullFile, nullFile, Patch.createNull());
  }

  isEqual(other) {
    if (!(other instanceof this.constructor)) { return false; }

    return this === other || (
      this.oldFile.isEqual(other.oldFile) &&
      this.newFile.isEqual(other.newFile) &&
      this.patch.isEqual(other.patch)
    );
  }
