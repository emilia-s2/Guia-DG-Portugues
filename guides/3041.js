// Damned Citadel
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		// PHASE 1
		"s-3041-1000-106-0": [{ type: "text", sub_type: "message", message: "Push", message_PT: "Empurrar" }],
		"s-3041-1000-110-0": [{ type: "text", sub_type: "message", message: "Throw Front (Stun)", message_PT: "Lançar para a Frente (Stun)" }],
		"s-3041-1000-116-0": [ // 116 - 117 - 118
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_PT: "Lançar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 210, 400, null, 250, 0, 2000] }
		],
		"s-3041-1000-119-0": [ // 119 - 120 - 121
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_PT: "Lançar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 150, 400, null, 250, 0, 2000] }
		],
		"s-3041-1000-122-0": [ // 122 - 123 - 124
			{ type: "text", sub_type: "message", message: "Throw (Target)", message_PT: "Lançar (Alvo)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 550, null, 180, 0, 2000] }
		],
		"s-3041-1000-123-0": [
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 500, 0, 2000] }
		],
		"s-3041-1000-124-0": [{ type: "text", sub_type: "message", message: "AoE", message_PT: "АоЕ" }],
		"s-3041-1000-125-0": [{ type: "text", sub_type: "message", message: "Front Hit | Stun", message_PT: "Golpe Frente | Stun" }],
		"s-3041-1000-126-0": [
			{ type: "text", sub_type: "message", message: "Stun", message_PT: "Stun" },
			{ type: "spawn", func: "vector", args: [553, 35, 250, 10, 400, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 325, 250, 350, 400, 0, 2000] }
		],
		"s-3041-1000-129-0": [{ type: "text", sub_type: "message", message: "Somersault | Back Hit", message_PT: "Cambalhota | Golpe Atrás" }],
		"s-3041-1000-130-0": [
			{ type: "text", sub_type: "message", message: "Back Hit (Bleed)", message_PT: "Golpe Atrás (Sangramento)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 340, null, 250, 0, 2000] }
		],
		"s-3041-1000-142-0": [{ type: "text", sub_type: "message", message: "Frontal Combo", message_PT: "Combo Frontal" }],
		"s-3041-1000-301-0": [{ type: "text", sub_type: "message", message: "Circles (Target)", message_PT: "Círculos (Alvo)" }],
		"s-3041-1000-340-0": [
			{ type: "text", sub_type: "message", message: "Laser", message_PT: "Laser" },
			{ type: "spawn", func: "vector", args: [912, 90, 60, 25, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 270, 60, 335, 300, 0, 2000] }
		],

		// PHASE 2
		"s-3041-2000-106-0": [{ type: "text", sub_type: "message", message: "Push", message_PT: "Empurrar" }],
		"s-3041-2000-110-0": [{ type: "text", sub_type: "message", message: "Throw Front (Stun)", message_PT: "Lançar para a Frente (Stun)" }],
		"s-3041-2000-116-0": [ // 116 - 117 - 118
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_PT: "Lançar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 210, 400, null, 250, 0, 2000] }
		],
		"s-3041-2000-119-0": [ // 119 - 120 - 121
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_PT: "Lançar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 150, 400, null, 250, 0, 2000] }
		],
		"s-3041-2000-122-0": [ // 122 - 123 - 124
			{ type: "text", sub_type: "message", message: "Throw (Target)", message_PT: "Lançar (Alvo)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 550, null, 180, 0, 2000] }
		],
		"s-3041-2000-123-0": [
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 500, 0, 2000] }
		],
		"s-3041-2000-124-0": [{ type: "text", sub_type: "message", message: "AoE", message_PT: "АоЕ" }],
		"s-3041-2000-125-0": [{ type: "text", sub_type: "message", message: "Front Hit | Stun", message_PT: "Golpe Frente | Stun" }],
		"s-3041-2000-126-0": [
			{ type: "text", sub_type: "message", message: "Stun", message_PT: "Stun" },
			{ type: "spawn", func: "vector", args: [553, 35, 250, 10, 400, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 325, 250, 350, 400, 0, 2000] }
		],
		"s-3041-2000-129-0": [{ type: "text", sub_type: "message", message: "Somersault | Back Hit", message_PT: "Cambalhota | Golpe Atrás" }],
		"s-3041-2000-130-0": [
			{ type: "text", sub_type: "message", message: "Back Hit (Bleed)", message_PT: "Golpe Atrás (Sangramento)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 340, null, 250, 0, 2000] }
		],
		"s-3041-2000-142-0": [{ type: "text", sub_type: "message", message: "Frontal Combo", message_PT: "Combo Frontal" }],
		"s-3041-2000-143-0": [{ type: "text", sub_type: "message", message: "Hit | Back Push", message_PT: "Golpe | Empurrão para Atrás" }],
		"s-3041-2000-143-1": [{ type: "text", sub_type: "message", message: "Back Push", message_PT: "Empurrão para Atrás" }],
		"s-3041-2000-144-0": [
			{ type: "text", sub_type: "message", message: "Right X-Swipe", message_PT: "Deslizar a Direita X" },
			{ type: "spawn", func: "vector", args: [912, 315, 700, 130, 1200, 0, 3000] }
		],
		"s-3041-2000-145-0": [
			{ type: "text", sub_type: "message", message: "Left X-Swipe", message_PT: "Deslizar a Esquerda X" },
			{ type: "spawn", func: "vector", args: [912, 45, 700, 230, 1200, 0, 2000] }
		],
		"s-3041-2000-146-0": [
			{ type: "text", sub_type: "message", message: "Right Swipe", message_PT: "Deslizar a Direita" },
			{ type: "spawn", func: "vector", args: [912, 10, 500, 180, 1000, 0, 3000] }
		],
		"s-3041-2000-147-0": [
			{ type: "text", sub_type: "message", message: "Left Swipe", message_PT: "Deslizar a Esquerda" },
			{ type: "spawn", func: "vector", args: [912, 350, 500, 180, 1000, 0, 2000] }
		],
		"s-3041-2000-148-0": [
			{ type: "text", sub_type: "message", message: "Stun (AoE)", message_PT: "Stun (АоЕ)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 50, null, 250, 0, 2000] }
		],
		"s-3041-2000-151-0": [
			{ type: "text", sub_type: "message", message: "Throws Combo | Stun", message_PT: "Lançar Combo | Stun" },
			{ type: "spawn", func: "circle", args: [true, 912, 180, 200, null, 200, 0, 3000] }
		],
		"s-3041-2000-152-0": [
			{ type: "text", sub_type: "message", message: "Stun", message_PT: "Stun" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, null, 250, 0, 2000] }
		],
		"s-3041-2000-301-0": [{ type: "text", sub_type: "message", message: "Circles (Target)", message_PT: "Círculos (Alvo)" }],
		"s-3041-2000-340-0": [
			{ type: "text", sub_type: "message", message: "Laser", message_PT: "Laser" },
			{ type: "spawn", func: "vector", args: [912, 90, 60, 25, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 270, 60, 335, 300, 0, 2000] }
		],

		"qb-3041-2000-3041201": [{ type: "text", sub_type: "message", message: "Blue Circles (Safe)", message_PT: "Círculos Azuis (Seguro)" }],
		"qb-3041-2000-3041202": [{ type: "text", sub_type: "message", message: "Red Circles (Dodge)", message_PT: "Círculos Vermelhos (Esquiva)" }],
		"qb-3041-2000-3041400": [{ type: "text", sub_type: "message", message: "Break Statues", message_PT: "Quebrar Escudos das Státuas" }]
	};
};