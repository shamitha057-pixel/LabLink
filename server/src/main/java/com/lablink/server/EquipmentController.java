
package com.lablink.server;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/equipment")
public class EquipmentController {

    @GetMapping
    public List<Map<String, Object>> getEquipment() {

        return List.of(
            Map.of(
                "id", 1,
                "name", "Arduino Uno",
                "category", "Electronics",
                "pricePerDay", 50,
                "availableQuantity", 8
            ),
            Map.of(
                "id", 2,
                "name", "Raspberry Pi 4",
                "category", "Computing",
                "pricePerDay", 120,
                "availableQuantity", 4
            ),
            Map.of(
                "id", 3,
                "name", "Ultrasonic Sensor",
                "category", "Sensors",
                "pricePerDay", 20,
                "availableQuantity", 12
            ),
            Map.of(
                "id", 4,
                "name", "Digital Oscilloscope",
                "category", "Electronics",
                "pricePerDay", 200,
                "availableQuantity", 0
            ),
            Map.of(
                "id", 5,
                "name", "Robotic Arm Kit",
                "category", "Robotics",
                "pricePerDay", 150,
                "availableQuantity", 3
            ),
            Map.of(
                "id", 6,
                "name", "DHT11 Sensor",
                "category", "Sensors",
                "pricePerDay", 30,
                "availableQuantity", 10
            )
        );
    }
}
