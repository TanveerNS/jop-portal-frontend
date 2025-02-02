export function snakeToCamel(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map(snakeToCamel);
    }
    if (obj !== null && obj.constructor === Object) {
      const newObj: any = {};
      Object.keys(obj).forEach(key => {
        const camelKey = key.replace(/_([a-z])/g, g => g[1].toUpperCase());
        newObj[camelKey] = snakeToCamel(obj[key]);
      });
      return newObj;
    }
    return obj;
  }
  