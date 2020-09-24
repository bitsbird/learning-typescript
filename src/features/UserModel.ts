// hot to structure a model class?

interface UserPros {
  name?: string;
  surename?: string;
  dateOfBirth?: Date;

  [propName: string]: string | Date | undefined;
}

enum UserEvents {
  PROP_UPDATE,
  PROP_RESET,
}

// I am using a type alias, to describe the type callback
type Callback = () => void;

export class UserModel {
  private callbackMap: Map<string, Callback[]>;

  constructor(private props: UserPros) {
    this.callbackMap = new Map();
  }

  get(propName: string): string | Date | undefined {
    return this.props[propName];
  }

  set(props: UserPros): void {
    Object.assign(this.props, props);
  }

  //I want to be able to register collback for some event happening on the model
  on(eventName: UserEvents, callBack: Callback): void {
    const callbacks = this.callbackMap.get(eventName.toString());
    if (!callbacks) {
      this.callbackMap.set(eventName.toString(), [callBack]);
    } else {
      callbacks.push(callBack);
    }
  }

  private trigger(eventName: UserEvents) {
    const callbacks = this.callbackMap.get(eventName.toString());
    callbacks?.forEach((cb) => cb());
  }
}
