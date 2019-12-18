int SIG = 4;    // SIGNAL

void setup() {
  Serial.begin(9600);
  pinMode(SIG, OUTPUT);
}

void loop() {
  long duration, distance;

  pinMode(SIG, OUTPUT);

  digitalWrite(SIG, LOW);
  delayMicroseconds(2);
  digitalWrite(SIG, HIGH);
  delayMicroseconds(5);
  digitalWrite(SIG, LOW);

  pinMode(SIG, INPUT);

  duration = pulseIn(SIG, HIGH);

  distance = duration * 340.0 * 100.0 / 1000000.0 / 2.0;

  Serial.print(distance);
  Serial.print("cm");
  Serial.println();
  delay(500);
}
