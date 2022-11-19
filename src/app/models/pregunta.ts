
export class Pregunta {
  constructor(
    public pregunta: String,
    public opcion1: String,
    public opcion2: String,
    public opcion3: String,
    public rptaCorrect: String,
    public rpta1: Boolean,
    public rpta2: Boolean,
    public rpta3: Boolean
  ) {}
}
