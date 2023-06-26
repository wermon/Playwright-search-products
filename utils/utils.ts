export async function repeat_action_till_time(action: (...args: string[]) => any, till: string, repeat_interval_ms?: number){
    repeat_interval_ms ??= 5000;
      while(new Date().getTime() < Date.parse(till)){
        action();
        await sleep(repeat_interval_ms);
      } 
  }
  
export  function sleep(ms: number): Promise<any>{
    return new Promise(r => setTimeout(r, ms));
  }