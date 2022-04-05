class Tv {
  public brand: string;
  public size: number;
  public resolution: string;
  public connections: string[];
  public connectedTo: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn() {
    console.log(this.brand, this.size, this.resolution, this.connections);
  }
}

const tv1 = new Tv('TLC', 50, 'FULL HD', ['HDMI', 'USB', 'WIFI']);

tv1.turnOn;